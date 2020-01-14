export const searchFilmsByForm = (array, valueTitle, valueStars) => {

  if(valueTitle) {
  return array.filter(el =>
    el.name.toLowerCase().trim().includes(valueTitle.toLowerCase().trim()))
  }

  if(!valueTitle && valueStars) {
    return array.filter(el => el.stars.toString().toLowerCase().includes(valueStars.toLowerCase().trim()))
}
}