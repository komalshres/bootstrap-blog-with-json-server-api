const url = new URLSearchParams(window.location.search);
const postId = url.get("post-id");

fetch(`http://localhost:3000/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    const {
      title,
      publishedAt,
      author,
      img_featured,
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
      Posted on ${publishedAt} by ${author}
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
      src=${img_featured}
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
