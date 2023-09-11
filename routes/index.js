module.exports = (app) => {
  /**
   * @api {get} / API Status
   * @apiGroup Status
   * @apisuccess {String} status API Status' message
   * @apiSuccessExample {json} Success
   *  HTTP/1.1 200 OK
   * {"status": "Task management API"}
   */
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Task management API" });
  });
};
