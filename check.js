const fs = require('fs');
const h = fs.readFileSync('index.html', 'utf8');
const s = h.indexOf('<script type="module">') + 22;
const e = h.indexOf('</script>', s);
const j = h.substring(s, e);
try {
  new Function(j);
  console.log('OK - no syntax errors');
} catch(err) {
  console.log('ERROR:', err.message);
  // Find approximate line
  const m = err.message.match(/at (\d+)/);
  if (m) console.log('Line in script:', m[1]);
}
