const getCategory = () => {
  fetch("http://localhost:3000/category")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export default getCategory;
