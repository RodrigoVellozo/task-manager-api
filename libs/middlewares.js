bodyParser = require('body-parser')

const port = 3000;

module.exports = app => {
    app.set('port', port);
    app.set('json spaces', 4);
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    })
};