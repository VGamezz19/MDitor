module.exports = {
    // Set all other paths relative this this one. Important when cosmos.config
    // isn't placed in the project root
    //rootPath: '../',
  
    // Additional entry points that should be present along with any component.
    // Sad, but inevitable.
    //globalImports: ['./reset.css', './global.css'],
  
    // Customize pattern(s) for matching fixture files
    //fileMatch: ['**/fixtures-in-here/**/*.js',
  
    // Fixtures will not be loaded in the playground if their names match these
    //exclude: [/not-a-fixture/, /its-complicated/, /its-not-me-its-you/],
  
    // Where to serve static files from. Like --content-base in webpack-dev-server.
    // publicPath: 'src/public',
  
    // Set base URL for static assets from public folder
    //publicUrl: '/static/',
  
    // Customize proxies file path. Useful if Babel doesn't compile the root dir.
    //proxiesPath: 'src/proxies.cosmos',
  
    // Render inside custom root element. Useful if that root element already
    // has styles attached, but bad for encapsulation.
     containerQuerySelector: '#root',
  
    // Disable hot module replacement
    //hot: false,
  
    // HTTP proxy specific requests to a different target
    // httpProxy: {
    //   context: '/api',
    //   target: 'http://localhost:4000/api'
    // },
  
    // These ones are self explanatory
    hostname: 'localhost',
    port: 8989,
    webpackConfigPath: './config/webpack.config.dev'
  };