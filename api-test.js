const https = require('https');
const data = JSON.stringify({
  model: 'GLM-4.7-Flash',
  messages: [
    { role: 'system', content: '你是一位助手。只回覆一句話。' },
    { role: 'user', content: '用繁體中文說你好' }
  ],
  temperature: 0.8,
  max_tokens: 100
});
const options = {
  hostname: 'open.bigmodel.cn',
  path: '/api/paas/v4/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 8d0aed4bd2c54761bfc6acbcc5da3cd1.28X5OyQEL0SrHS7M',
    'Content-Length': Buffer.byteLength(data)
  }
};
const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Body:', body.substring(0, 500));
  });
});
req.on('error', (e) => console.error('Error:', e.message));
req.write(data);
req.end();
