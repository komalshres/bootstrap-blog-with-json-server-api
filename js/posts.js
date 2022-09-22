const getPost = () =>
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((posts) => {
      const [featuredPost, ...restPost] = posts;
      const { id, title, body, publishedAt, img_850x350 } = featuredPost;
      // let randomFeatured = Math.floor(Math.random() * posts.length);
      // console.log(randomFeatured);
      document.getElementById("featured").innerHTML = `<a href="#!"
    ><img
      class="card-img-top"
      src= ${img_850x350}
      alt="..."
  /></a>
  <div class="card-body">
    <div class="small text-muted">${publishedAt}</div>
    <h2 class="card-title">${title}</h2>
    <p class="card-text">
      ${body.slice(0, 300)}...
    </p>
    <a class="btn btn-primary" href="#!">Read more →</a>
  </div>`;

      let postHTML1 = "";
      let postHTML2 = "";
      restPost.forEach((post) => {
        const postHTML = `<div class="card mb-4">
        <a href="#!"
          ><img
            class="card-img-top"
            src=${post.img}
            alt="..."
        /></a>
        <div class="card-body">
          <div class="small text-muted">${post.publishedAt}</div>
          <h2 class="card-title h4">${post.title}</h2>
          <p class="card-text">
            ${post.body.slice(0, 200)}...
          </p>
          <a class="btn btn-primary" href="/post?post-id=${
            post.id
          }">Read more →</a>
        </div>
      </div>`;
        post.id % 2 ? (postHTML1 += postHTML) : (postHTML2 += postHTML);
      });
      document.getElementById("post-row-1").innerHTML = postHTML1;
      document.getElementById("post-row-2").innerHTML = postHTML2;
    });

export default getPost;

