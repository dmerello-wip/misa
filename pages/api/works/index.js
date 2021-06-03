const works = require("@/db/works.json");

export default (req, res) => {
  res.status(200).json(works.items);
};
