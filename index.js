//Llamamos al modulo http 
const http= require('http');
//Establecemos la url o IP de nuestro servidor
const hostname = '127.0.0.1';
//Establecemos el puerto de escucha
const port = 3000;
//Creamos una instancia HTTP con un reques y un respo const server = http.createServer((req, res) => {
const server= http.createServer((req, res) => {
//El servidor respondera un codigo 200
res.statusCode = 200;
//El servidor respondera con un texto plano res.setHeader('Content-Type', 'text/plain');
res.setHeader('Content-Type', 'text/html');
//El servidor respondera el mensaje hola mundo res.end('Hola Mundo\n');
res.end('<h1>Hola Mundo</h1>');
});
server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/ `)
});