const port = 3000;
module.exports = app => {
    app.set('port', port);
    app.set('json spaces', 4);
};