const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\91836\\SOCIAL DADDY\\SDMLS';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (html.includes('2.2M+')) {
    html = html.replace(/2\.2M\+/g, 'thousands of');
    changed = true;
  }
  
  if (html.includes('25,000+')) {
    html = html.replace(/25,000\+/g, '1k');
    changed = true;
  }
  
  if (html.includes('id="comp-mghvam6t"')) {
    html = html.replace(/id="comp-mghvam6t"/g, 'id="comp-mghvam6t" style="display:none !important;"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Updated ${file}`);
  }
});
