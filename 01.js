const arr = [{ title: "POST1" }];
let lastUserActivityTime1 = null;

function createPost1(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      arr.push(post);
      resolve();
    }, 1000);
  });
}

function deletedPost1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.length != 0) {
        let post = arr.pop();
        resolve(`${post.title} is deleted successfully`);
      } else {
        reject("error");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastUserActivityTime1 = new Date().getTime();
      resolve();
    }, 1000);
  });
}

function createPostAndUpdateActivity1(post) {
  Promise.all([createPost1(post), updateLastUserActivityTime1()])
    .then(() => {
      console.log("The posts are", arr);
      console.log("Last user activity time:", lastUserActivityTime1);
      return deletedPost1();
    })
    .then((val) => {
      if (val) {
        console.log(val);
      }
      console.log("new Post", arr);
    })
    .catch((err) => {
      console.log(err);
    });
}

createPostAndUpdateActivity1({ title: "POST2" });
createPostAndUpdateActivity1({ title: "POST3" });
