const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\91836\\SOCIAL DADDY\\SDMLS';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (html.includes('As Zillow Elite photographers, ')) {
    html = html.replace(/As Zillow Elite photographers, /gi, 'Our ');
    // wait if it's "Our our tours get..." no, "our tours get" is already there. So replacing with '' makes it "our tours get". Let's capitalize the first letter.
    // Actually, I'll just do a custom replace.
  }
  
  // Custom replaces
  let newHtml = html;
  
  newHtml = newHtml.replace(/As Zillow Elite photographers, our/g, 'Our');
  newHtml = newHtml.replace(/As Zillow Elite photographers, /g, '');
  
  newHtml = newHtml.replace(/ZILLOW ELITE PHOTOGRAPHERS/g, 'PROFESSIONAL PHOTOGRAPHERS');
  newHtml = newHtml.replace(/Zillow Certified Photographer/g, 'Certified Photographer');
  newHtml = newHtml.replace(/with a Zillow Elite Photographer \(like SOCIAL DADDY\)/g, 'with SOCIAL DADDY');
  newHtml = newHtml.replace(/a Zillow Elite Photographer/g, 'a Professional Photographer');

  if (newHtml !== html) {
    fs.writeFileSync(filePath, newHtml, 'utf8');
    console.log(`Updated ${file}`);
  }
});
