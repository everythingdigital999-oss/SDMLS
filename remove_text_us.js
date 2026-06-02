const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let h = fs.readFileSync(f, 'utf8');
  let newH = h.replace(/ Text Us!/g, '').replace(/Text Us!/g, '');
  if (h !== newH) {
    fs.writeFileSync(f, newH, 'utf8');
    console.log('Updated ' + f);
  }
});
