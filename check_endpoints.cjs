const http = require('http');

function get(path){
  return new Promise((resolve, reject) => {
    const req = http.get({ hostname: '127.0.0.1', port: 5000, path, timeout: 5000 }, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(new Error('timeout')); });
  });
}

(async () => {
  try {
    const root = await get('/');
    console.log('=== / ===');
    console.log('Status:', root.status);
    console.log('Headers:', JSON.stringify(root.headers));
    console.log(root.body.slice(0, 2000));

    const news = await get('/api/news');
    console.log('\n=== /api/news ===');
    console.log('Status:', news.status);
    console.log('Headers:', JSON.stringify(news.headers));
    console.log(news.body);
  } catch (err) {
    console.error('Request error:', err && err.message ? err.message : err);
    process.exitCode = 1;
  }
})();
