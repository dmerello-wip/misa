export async function getPageFromSlug(slug) {
  return await fetch(`${process.env.API_URL}${slug}`).then((response) => {
    return response.json();
  }).then( (data) => {
    return data;
  });
}
