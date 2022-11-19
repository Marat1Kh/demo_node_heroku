const {Server} = require('http');
const headers = {
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
'Access-Control-Allow-Headers':
'Content-Type,Accept-Control-Allow-Headers',
'Content-Type': 'text/plain; charset=utf-8'
};
Server((req, res) -> res
.writeHead(200, headers)
.end(req.url=== '/login' ? 'LOGIN' : 'Not done yet')
)
.listen(process.env.PORT);
