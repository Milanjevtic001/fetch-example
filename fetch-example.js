const main = async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();

    console.log(posts);
  } catch (error) {
    console.log(error.message);
  }
};

main();
