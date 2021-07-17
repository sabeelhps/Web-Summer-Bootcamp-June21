$(document).ready(() => {
  loadPosts();
});

async function loadPosts() {
  const posts = await axios.get("/api/post", {
    params: { postedBy: profileUserId },
  });

  for (let post of posts.data) {
    const html = createPostHtml(post);
    $(".userPostsContainer").prepend(html);
  }
}
