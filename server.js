var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

app.use( express.static( path.join( root, './client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json());
app.set('view engine', 'html');


require('./server/config/mongoose.js')

require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log( `server running on port ${ port } for friends API` );
});
