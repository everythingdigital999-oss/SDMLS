const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const styleBlock = `
<style class="hide-about-and-team">
  li:has(a[href="about-us"]),
  li:has(a[href="team"]),
  a[href="about-us"],
  a[href="team"],
  a[href="./about-us"],
  a[href="./team"],
  #comp-mghvpghg {
    display: none !important;
  }
</style>
</head>
`;

files.forEach(f => {
  let h = fs.readFileSync(f, 'utf8');
  if (!h.includes('hide-about-and-team')) {
    h = h.replace('</head>', styleBlock);
    fs.writeFileSync(f, h, 'utf8');
    console.log('Updated ' + f);
  }
});
