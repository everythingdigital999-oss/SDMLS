const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');
const regex = /<script id="wix-viewer-model" type="application\/json">([\s\S]*?)<\/script>/;
const match = html.match(regex);
if (match) {
    const data = JSON.parse(match[1]);
    fs.writeFileSync('wix-viewer-model.json', JSON.stringify(data, null, 2));
    console.log('wix-viewer-model.json created');
} else {
    console.log('wix-viewer-model not found');
}
