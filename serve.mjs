// Tiny local server: node serve.mjs  →  http://localhost:8123
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

createServer(async (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
  res.end(await readFile(new URL('./index.html', import.meta.url)));
}).listen(8123, '127.0.0.1', () => console.log('http://localhost:8123'));
