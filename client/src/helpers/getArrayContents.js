export const getArrayContents = (data) => {
  const array = []
  data.split('\n\n').map(arr => {
    const opt = {}
    arr.split('\n').map(el => {
      const split = el.split(':');
      const key = split[0]
      const value = split[1];
      opt[key] = key === "Stars" ? value.split(",").toString().trim() : value.trim();;
    return opt
    }
  )
    array.push(opt)
    return opt
  })
  return array;
}