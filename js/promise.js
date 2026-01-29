// Synchronous vs Asyncronous Code

function runExample(example) {
  switch (example) {
    case "async": {
      // Async code
      console.log("start");
      setTimeout(() => {
        console.log("async code");
      }, 0);
      console.log("finish");
      break;
    }
    case "callback": {
      // callbacks
      console.log("start");
      function importantAction(username, cb) {
        setTimeout(() => {
          cb("Subscribe to " + username);
        }, 0);
      }
      importantAction("Arnab", function (name) {
        console.log(name);
      });
      console.log("finish");
      break;
    }
    case "callback-hell": {
      // callback hell -- pyramid of structure
      console.log("start");
      function importantAction(username, cb) {
        setTimeout(() => {
          cb("Subscribed to " + username);
        }, 0);
      }
      function likeTheVideo(action, cb) {
        setTimeout(() => {
          cb("Liked the " + action);
        }, 1000);
      }
      function shareTheVideo(action, cb) {
        setTimeout(() => {
          cb("Shared the " + action);
        }, 1000);
      }
      importantAction("Arnab", function (name) {
        console.log(name);
        likeTheVideo("Video", function (action) {
          console.log(action);
          shareTheVideo("Video", function (action) {
            console.log(action);
          });
        });
      });
      console.log("finish");
      break;
    }
    case "promise": {
      // promise
      console.log("start");
      const sub = new Promise((resolve, reject) => {
        const result = true;
        if (result) {
          resolve("promise Resolved");
        } else {
          reject(new Error("Promise Rejected"));
        }
      });
      sub
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("finish");
      break;
    }
    case "promise-chaining": {
      // promise chaining
      console.log("start");
      function importantAction(username) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Subscribed to " + username);
          }, 0);
        });
      }
      function likeTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Liked the " + action);
          }, 1000);
        });
      }
      function shareTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Shared the " + action);
          }, 1000);
        });
      }
      importantAction("Arnab")
        .then((res) => {
          console.log(res);
          return likeTheVideo("Video");
        })
        .then((res1) => {
          console.log(res1);
          return shareTheVideo("Video");
        })
        .then((res2) => {
          console.log(res2);
        })
        .catch((err) => console.log(err));
      console.log("finish");
      break;
    }
    case "promise-all-combinator": {
      // promise combinator -- if one fails, all of this fails
      console.log("start");
      function importantAction(username) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Subscribed to " + username);
          }, 0);
        });
      }
      function likeTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Liked the " + action);
          }, 1000);
        });
      }
      function shareTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Shared the " + action);
          }, 1000);
        });
      }
      Promise.all([
        importantAction("Arnab"),
        likeTheVideo("Video"),
        shareTheVideo("Video"),
      ])
        .then((res) => {
          console.log(res[0]);
          console.log(res[1]);
          console.log(res[2]);
        })
        .catch((err) => console.log(err));
      console.log("finish");
      break;
    }
    case "promise-race-combinator": {
      // promise combinator -- first promise which resolved / rejected first
      console.log("start");
      function importantAction(username) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Subscribed to " + username);
          }, 0);
        });
      }
      function likeTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Liked the " + action);
          }, 1000);
        });
      }
      function shareTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Shared the " + action);
          }, 1000);
        });
      }
      Promise.race([
        importantAction("Arnab"),
        likeTheVideo("Video"),
        shareTheVideo("Video"),
      ])
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      console.log("finish");
      break;
    }
    case "promise-all-settled-combinator": {
      // promise combinator -- it returns all promises that are fulfilled as well.
      console.log("start");
      function importantAction(username) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Subscribed to " + username);
          }, 0);
        });
      }
      function likeTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Liked the " + action);
          }, 1000);
        });
      }
      function shareTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Shared the " + action);
          }, 1000);
        });
      }
      Promise.allSettled([
        importantAction("Arnab"),
        likeTheVideo("Video"),
        shareTheVideo("Video"),
      ])
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      console.log("finish");
      break;
    }
    case "promise-any-combinator": {
      // promise combinator -- it returns the first fiulfilled promises, ignore all the rejected once
      console.log("start");
      function importantAction(username) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Subscribed to " + username);
          }, 0);
        });
      }
      function likeTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Liked the " + action);
          }, 1000);
        });
      }
      function shareTheVideo(action) {
        return new Promise((res, rej) => {
          setTimeout(() => {
            res("Shared the " + action);
          }, 1000);
        });
      }
      Promise.allSettled([
        importantAction("Arnab"),
        likeTheVideo("Video"),
        shareTheVideo("Video"),
      ])
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      console.log("finish");
      break;
    }
  }
}

// runExample("async");
// runExample("callback");
// runExample("callback-hell");
// runExample("promise");
// runExample("promise-chaining");
// runExample("promise-all-combinator");
// runExample("promise-race-combinator");
// runExample("promise-all-settled-combinator");
runExample("promise-any-combinator");
