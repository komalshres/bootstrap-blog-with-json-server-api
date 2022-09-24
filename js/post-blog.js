import getCategory from "/js/category.js";

getCategory();

const form = document.querySelector("form");

const postBlog = () => {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const body = document.getElementById("post").value;
  const img_thumb = document.getElementById("thumbnail").value;
  const img_featured = document.getElementById("featured").value;
  const content = document.getElementsByClassName("note-editable")[0].innerHTML;

  console.log(content);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author,
      title,
      body,
      img_thumb,
      img_featured,
      publishedAt: `${month} ${day}, ${year}`,
      content,
    }),
  });
  alert(`Blog Posted`);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   error("author");
  //   error("title");
  //   error("post");
  //   error("thumbnail");
  //   error("featured");
  //   console.log(error());
  //   if (
  //     error("author") &&
  //     error("title") &&
  //     error("post") &&
  //     error("thumbnail") &&
  //     error("featured")
  //   )

  if (error()) {
    postBlog();
  }
});

const error = () => {
  const el = document.getElementsByClassName("note-editable")[0].innerHTML;

  if (el.length < 500) {
    console.log("here");
    alert("Content minimum characters = 500");
  } else {
    return true;
  }
};
