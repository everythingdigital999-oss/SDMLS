const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');
let match = h.match(/<li[^>]*>.*?href=\"about-us\".*?<\/li>/);
if (match) console.log(match[0]);
