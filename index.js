const micro = require("micro");
const query = require("micro-query");
const cors = require("micro-cors")();

var Feed = require("rss-to-json");

const handle = async (req, res) => {
  const { url = "" } = query(req);

  const rss = await new Promise(resolve => {
    Feed.load(url, function(err, rss) {
      resolve(rss);
    });
  });

  return rss;
};

module.exports = micro(cors(handle));
