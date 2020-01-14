const fetchFilms = () => {
  return fetch("http://localhost:5000/films").then(res => res.json());
};

const saveFilm = films => {
  return fetch("http://localhost:5000/films", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(films)
  }).then(res => res.json());
};

const deleteFilm = id => {
  return fetch(`http://localhost:5000/films/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
};

// const deleteNoteAsync = async id => {
//   const response = await fetch(`http://localhost:9000/notes/${id}`, {
//     method: 'DELETE',
//   });
//   const data = await response();

//   return data;
// };

export default { fetchNotes, saveNote, deleteNote };
