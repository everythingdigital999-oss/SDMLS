const fs = require('fs');
let h = fs.readFileSync('pricing-and-booking.html', 'utf8');

h = h.replace(/After 25 miles one way:/gi, 'Up to 33km:');
h = h.replace(/\$0\.70\/mile/gi, 'Free');
h = h.replace(/50-75 miles:/gi, '33-70km:');
h = h.replace(/\$75 travel fee/gi, '$30 extra');
h = h.replace(/75-100 miles:/gi, '70-110km:');
h = h.replace(/\$100 travel fee/gi, '$50 extra');
h = h.replace(/Over 100 miles:/gi, 'Over 110km:');

fs.writeFileSync('pricing-and-booking.html', h, 'utf8');
console.log('Updated pricing-and-booking.html');
