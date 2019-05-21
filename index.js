const micro = require("micro");
const query = require("micro-query");
var Feed = require("rss-to-json");

module.exports = micro((req, res) => {
  const { url = "" } = query(req);
  return url;
});
