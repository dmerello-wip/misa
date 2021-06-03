export async function getPageFromSlug(slug) {
  return await fetch(`${process.env.API_URL}${slug}`).then((response) => {
    return response.json();
  }).then( (data) => {
    return data;
  });
}

export async function getWorkFromSlug(slug) {
  return await fetch(`${process.env.API_URL}works/${slug}`).then((response) => {
    return response.json();
  }).then( (data) => {
    return data;
  });
}

export async function getWorksSlugs() {
  return await fetch(`${process.env.API_URL}works`).then((response) => {
    return response.json();
  }).then( (data) => {
    return data.map((el) => el.slug);
  });
}
