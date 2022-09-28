const url_base = "https://jsonplaceholder.typicode.com/users";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const showData = async () => {
  const finalData = await getData(url_base);
  console.log(finalData);
  return finalData;
};

showData();

// function getData(url) {
//   return fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// const showData = (url) => {
//   const finalData = getData(url);
//   return finalData;
// };

// console.log(showData(url_base));
