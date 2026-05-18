const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const PORT = 5000;
const ROOT = __dirname;

const DFLOW_API_KEY = 'dk_live_I0Sa81vv06e1FvWUYEAfhVhu5WvQPr2A';
const DFLOW_HOST    = 'dflow.seeders.gr';

const MIME = {
  '.html': 'text/html',
  '.js':   'text/javascript',
  '.jsx':  'text/babel',
  '.css':  'text/css',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

function handleLeadSubmission(req, res) {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    let payload;
    try { payload = JSON.parse(body); } catch {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
      return;
    }

    const data = JSON.stringify(payload);
    const options = {
      hostname: DFLOW_HOST,
      path:     '/api/v1/leads',
      method:   'POST',
      headers: {
        'Content-Type':   'application/json',
        'Content-Length': Buffer.byteLength(data),
        'X-API-Key':      DFLOW_API_KEY,
      },
    };

    const proxyReq = https.request(options, proxyRes => {
      let responseBody = '';
      proxyRes.on('data', chunk => { responseBody += chunk; });
      proxyRes.on('end', () => {
        res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
        res.end(responseBody);
      });
    });

    proxyReq.on('error', err => {
      console.error('DFlow API error:', err.message);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Gateway error', detail: err.message }));
    });

    proxyReq.write(data);
    proxyReq.end();
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/submit-lead') {
    return handleLeadSubmission(req, res);
  }

  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    const contentType = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
