const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('public').filter(f => f.endsWith('.html'));

console.log('--- Analyzing HTML Files for Brand Consistency ---');
files.forEach(file => {
    const html = fs.readFileSync(path.join('public', file), 'utf8');
    const hasThemeCss = html.includes('taamara-theme.css');
    const hasGaramond = html.includes('Cormorant+Garamond') || html.includes('Cormorant Garamond');
    const hasMobileBottomNav = html.includes('fixed bottom-0') || html.includes('bottom-nav');
    const hasButtonsAsNav = html.includes('<button id="nav') || html.includes("<button id='nav");
    
    console.log(`${file.padEnd(25)} | ThemeCSS: ${hasThemeCss ? 'YES' : ' NO'} | Garamond: ${hasGaramond ? 'YES' : ' NO'} | BottomNav: ${hasMobileBottomNav ? 'YES' : ' NO'} | ButtonNavs: ${hasButtonsAsNav ? 'YES' : ' NO'}`);
});
