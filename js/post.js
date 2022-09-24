import getCategory from "/js/category.js";

getCategory();

const url = new URLSearchParams(window.location.search);
const postId = url.get("post-id");

fetch(`https://admin.nextjavascript.com/fake-api/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    const {
      title,
      pulished_date,
      author,
      featured_image,
      body,
      category,
      content,
    } = post;
    document.querySelector("title").innerText = `${title} - Blog`;

    document.querySelector("article").innerHTML = `<header class="mb-4">
    <!-- Post title-->
    <h1 class="fw-bolder mb-1">${title}</h1>
    <!-- Post meta content-->
    <div class="text-muted fst-italic mb-2">
      Posted on ${pulished_date} by ${author}
    </div>
    <!-- Post categories-->
    ${
      category
        ? category
            .map((cate) => {
              return `<a
      class="badge bg-secondary text-decoration-none link-light"
      href="#!"
      >${cate}</a
    >`;
            })
            .join("\n")
        : ""
    }
  </header>
  <!-- Preview image figure-->
  <figure class="mb-4">
    <img
      class="img-fluid rounded"
      src=${featured_image}
      alt="..."
    />
  </figure>
  <!-- Post content-->
  <section class="mb-5">
    <p class="fs-5 mb-4">
      ${body}
    </p>
    ${content || " "}
   
  </section>`;
  });
