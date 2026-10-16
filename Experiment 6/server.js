const http = require('http');
const fs = require('fs');
const path = require('path');

// Middleware: log incoming requests
function logger(req, res, next) {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
}

function handleRequest(req, res) {
  const url = req.url.split('?')[0];
  let filePath =
    url === '/' || url === '/index.html'
      ? 'index.html'
      : url === '/about.html'
      ? 'about.html'
      : null;

  if (!filePath) return notFound(res);

  const send = (err, content) => {
    if (err) {
      console.error('File error:', err.path);
      return notFound(res);
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  };
  fs.readFile(path.join(__dirname, 'public', filePath), (err, content) =>
    err
      ? fs.readFile(path.join(__dirname, filePath), send)
      : send(null, content)
  );
}

function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(
    '<body style="font-family:Arial;color:#000;text-align:center;margin-top:120px"><h1 style="font-size:72px;margin:0">404</h1><p style="font-size:22px">Page Not Found</p><a href="index.html" style="color:#000;font-weight:bold">Back to Home</a></body>'
  );
}

const server = http.createServer((req, res) =>
  logger(req, res, () => handleRequest(req, res))
);

server.on('error', (err) => console.error('Server error:', err.message));
server.listen(3000, () =>
  console.log('Server running at http://localhost:3000/')
);
