//Starting server
module.exports = (app) => {
  app.db.sequelize.sync().then(() => {
    app.listen(app.get("port"), () => {
      console.log(`<<<<<Server is running on port ${app.get("port")} >>>>>`);
    });
  });
};
