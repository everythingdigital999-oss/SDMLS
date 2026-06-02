const html = require('fs').readFileSync('contact.html', 'utf8');
const regex = /src=["']([^"']+)["']/g;
let match;
const srcs = new Set();
while (match = regex.exec(html)) {
    srcs.add(match[1]);
}
console.log(Array.from(srcs).join('\n'));
