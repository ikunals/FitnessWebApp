export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3091d4c403msh86767c7e64703d4p1491a0jsn339eca9e24c9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}
export const fetchData = async(url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}

