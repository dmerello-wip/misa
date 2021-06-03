const works = require("@/db/works.json");

export default (req, res) => {
  let data = works.items.filter( (el)=> el.slug === req.query.slug );
  res.status(200).json(data[0]);
};
