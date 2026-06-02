const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let h = fs.readFileSync(f, 'utf8');
  let r = h;
  
  // Remove list items containing "Includes Interactive Floor Plan"
  r = r.replace(/<ul class="wixui-rich-text__text">\s*<li class="wixui-rich-text__text"[^>]*>\s*<p class="font_8 wixui-rich-text__text"[^>]*>[^<]*Includes Interactive Floor Plan<\/p>\s*<\/li>\s*<\/ul>/gi, '');
  r = r.replace(/<li class="wixui-rich-text__text"[^>]*>\s*<p class="font_8 wixui-rich-text__text"[^>]*>[^<]*Includes Interactive Floor Plan<\/p>\s*<\/li>/gi, '');
  
  // Remove specific string mentions
  r = r.replace(/Includes Interactive Floor Plan/gi, '');
  
  // Remove complimentary floorplan mention
  r = r.replace(/Add a 3D tour to your next photoshoot and receive a complimentary floorplan from SOCIAL DADDY!/gi, '');
  
  // Clean up "Floorplans" from meta description and text
  r = r.replace(/Floorplans, /gi, '');
  r = r.replace(/, Floorplans/gi, '');
  r = r.replace(/Floorplans/gi, '');
  r = r.replace(/Floorplan/gi, '');

  if (h !== r) {
    fs.writeFileSync(f, r, 'utf8');
    console.log('Updated ' + f);
  }
});
