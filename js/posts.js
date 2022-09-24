const getPost = () =>
  fetch("https://admin.nextjavascript.com/fake-api/posts?_sort=id&_order=desc")
    .then((response) => response.json())
    .then((posts) => {
      const [featuredPost, ...restPost] = posts;
      const { id, title, body, pulished_date, thumbnail } = featuredPost;
      // let randomFeatured = Math.floor(Math.random() * posts.length);
      // console.log(randomFeatured);
      document.getElementById("featured").innerHTML = `<a href="#!"
    ><img
      class="card-img-top"
      src= ${thumbnail}
      alt="..."
      height="400px"
  /></a>
  <div class="card-body">
    <div class="small text-muted">${pulished_date}</div>
    <h2 class="card-title">${title}</h2>
    <p class="card-text">
      ${body.slice(0, 300)}...
    </p>
    <a class="btn btn-primary" href="/post.html?post-id=${id}">Read more →</a>
  </div>`;

      let postHTML1 = "";
      let postHTML2 = "";
      restPost.forEach((post) => {
        const postHTML = `<div class="card mb-4">
        <a href="#!"
          ><img
            class="card-img-top"
            src=${post.thumbnail}
            alt="..."
            height="300px"
        /></a>
        <div class="card-body">
          <div class="small text-muted">${post.pulished_date}</div>
          <h2 class="card-title h4">${post.title}</h2>
          <p class="card-text">
            ${post.body.slice(0, 250)}...
          </p>
          <a class="btn btn-primary" href="/post.html?post-id=${
            post.id
          }">Read more →</a>
          <button class="btn btn-outline-danger delete-post" data-id="${
            post.id
          }">Delete</button>
        </div>
      </div>`;

        post.id % 2 ? (postHTML1 += postHTML) : (postHTML2 += postHTML);
      });
      document.getElementById("post-row-1").innerHTML = postHTML1;
      document.getElementById("post-row-2").innerHTML = postHTML2;

      const deleteButton = document.querySelectorAll(".delete-post");
      console.log(deleteButton);
      deleteButton.forEach((x) =>
        x.addEventListener("click", () => {
          const postId = x.getAttribute("data-id");
          deletePost(`${postId}`);
          x.style.display.none;
        })
      );
      const deletePost = (id) => {
        fetch(`https://admin.nextjavascript.com/fake-api/posts/${id}`, {
          method: "DELETE",
        });
      };
    });

export default getPost;
