const getCategory = () => {
  fetch("http://localhost:3000/category")
    .then((response) => response.json())
    .then((json) => {
      let categoryHTML = "";

      json.forEach((category) => {
        console.log(category);
        categoryHTML += `<div class="col-sm-6">
        <ul class="list-unstyled mb-0">
            <li><a href="#!">${category}</a></li>
        </ul>
    </div>`;
      });
      document.getElementById("category").innerHTML = categoryHTML;
    });
};

export default getCategory;
