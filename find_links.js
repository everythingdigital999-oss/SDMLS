const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');
let links = h.match(/<a[^>]*href=\"[^\"]*(about-us|team)[^\"]*\"[^>]*>.*?<\/a>/g);
if (links) links.forEach(l => console.log(l));
