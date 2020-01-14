export const sortFilmsByArray = (arr, method) => {
  if(method === 'title') {
  arr.sort((a, b) => a.name.localeCompare(b.name))
  return arr
  }

  if(method === 'release') {
    arr.sort((a, b) => b.release.localeCompare(a.release))
    return arr
  }

  return  arr
}