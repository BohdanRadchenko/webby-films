export const findFilmsByTitle = (array, value) => {
  return array.filter(el =>
    el.name.toLowerCase().includes(value.toLowerCase()) ||  el.stars.includes(value.toLowerCase())
  );
};