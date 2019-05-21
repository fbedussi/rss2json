const micro = require("micro");
const query = require("micro-query");
var Feed = require("rss-to-json");

module.exports = micro(async (req, res) => {
  const { url = "" } = query(req);

  const rss = await new Promise(resolve => {
    Feed.load(url, function(err, rss) {
      resolve(rss);
    });
  });

  return rss;
});
