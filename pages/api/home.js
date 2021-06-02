export default (req, res) => {
  res.status(200).json(contents);
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const contents = {
  "title": "home page",
  "description": "home page description",
  "works": [
    {
      "id": 1,
     "title": "le belle nanette",
      "picture": "http://localhost:3000/images/works/work_1.jpg"
    },
    {
      "id": 2,
     "title": "tapioche distruttive",
      "picture": "http://localhost:3000/images/works/work_2.jpg"
    },
    {
      "id": 3,
     "title": "la misa e il legnetto",
      "picture": "http://localhost:3000/images/works/work_3.jpg"
    },
    {
      "id": 4,
     "title": "cani",
      "picture": "http://localhost:3000/images/works/work_4.jpg"
    },
    {
      "id": 5,
     "title": "cose fatte a caso",
      "picture": "http://localhost:3000/images/works/work_5.jpg"
    },
    {
      "id": 6,
     "title": "un titolo come un'altro",
      "picture": "http://localhost:3000/images/works/work_6.jpg"
    },
    {
      "id": 7,
     "title": "cipperelloa",
      "picture": "http://localhost:3000/images/works/work_7.jpg"
    },
    {
      "id": 8,
     "title": "come un gatto sordo",
      "picture": "http://localhost:3000/images/works/work_8.jpg"
    },
    {
      "id": 9,
     "title": "la pelota",
      "picture": "http://localhost:3000/images/works/work_9.jpg"
    },
    {
      "id": 10,
      "title": "anni di piombino",
      "picture": "http://localhost:3000/images/works/work_10.jpg"
    },
    {
      "id": 11,
      "title": "articoli di caza",
      "picture": "http://localhost:3000/images/works/work_11.jpg"
    },
    {
      "id": 12,
      "title": "pelosetto nerone",
      "picture": "http://localhost:3000/images/works/work_12.jpg"
    },
    {
      "id": 13,
      "title": "pota",
      "picture": "http://localhost:3000/images/works/work_13.jpg"
    },
    {
      "id": 14,
      "title": "similitudini",
      "picture": "http://localhost:3000/images/works/work_14.jpg"
    },
    {
      "id": 15,
      "title": "la citofoneria cosmica",
      "picture": "http://localhost:3000/images/works/work_15.jpg"
    },
    {
      "id": 16,
      "title": "prante",
      "picture": "http://localhost:3000/images/works/work_16.jpg"
    },
    {
      "id": 17,
      "title": "preti neri e bianchi",
      "picture": "http://localhost:3000/images/works/work_17.jpg"
    },
    {
      "id": 18,
      "title": "colinco di dola",
      "picture": "http://localhost:3000/images/works/work_18.jpg"
    }
  ]
};