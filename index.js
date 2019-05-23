const micro = require("micro");
const query = require("micro-query");
const cors = require("micro-cors")();

let Parser = require("rss-parser");
let parser = new Parser();

const handle = async (req, res) => {
  const { url = "" } = query(req);

  try {
    return await parser.parseURL(url);
  } catch (e) {
    micro.send(res, 500, e.message);
  }
};

module.exports = micro(cors(handle));
