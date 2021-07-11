let fs = require('fs');
// Listen on a specific host via the HOST environment variable
let host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
let port = process.env.PORT || 7788;
let cors_proxy = require('cors-anywhere');
cors_proxy
  //The file path is default created by acme.
  //Modify according to your specific situation.
  .createServer({
    httpsOptions: {
      key: fs.readFileSync(
        '/root/.acme.sh/YOUR.DOMAIN.com/YOUR.DOMAIN.com.key'
      ),
      cert: fs.readFileSync('/root/.acme.sh/YOUR.DOMAIN.com/fullchain.cer'),
    },
    // Allow all origins
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });
