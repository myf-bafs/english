const https = require('https');
const options = {
  hostname: 'open.bigmodel.cn',
  path: '/api/paas/v4/chat/completions',
  method: 'OPTIONS'
};
const req = https.request(options, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Headers:', JSON.stringify(res.headers, null, 2));
});
req.on('error', (e) => console.error('Error:', e.message));
req.end();
