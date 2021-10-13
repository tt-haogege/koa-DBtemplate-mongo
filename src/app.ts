import { Context } from "koa"
import Koa from 'koa'
import appConfig from "./appConfig"
import middleware from "./middleware"
import { resolve } from "path"
import loadController from 'koa-router-decorators-up'

const KoaRouter = require('koa-router')
const onerror= require('koa-onerror')
const router = new KoaRouter()
const app = new Koa()
loadController(router, resolve(__dirname, './controllers'))
app.use(router.routes())
app.use(router.allowedMethods())
// error-handling
middleware(app)
app.on('error', (err: Error, ctx: Koa.Context) => {
  console.error('server error', err, ctx)
});
/**
 * Create HTTP server.
 */
var debug = require('debug')('demo:server');
var http = require('http');
var port = normalizePort(appConfig.appPort || '3000');
var server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */
 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);
function normalizePort(val: string) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}


function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
