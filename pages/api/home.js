const works = require("@/db/works.json");

export default (req, res) => {
  res.status(200).json(contents);
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const contents = {
  "title": "home page",
  "description": "home page description",
  "works": works.items
};