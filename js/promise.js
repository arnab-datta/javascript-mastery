// Synchronous vs Asyncronous Code

function runExample(example) {
  switch (example) {
    case 1: {
      // Async code
      console.log("start");
      setTimeout(() => {
        console.log("async code");
      }, 0);
      console.log("finish");
      break;
    }
    case 2: {
      // callbacks
      console.log("start");
      function importantAction(username, cb) {
        setTimeout(() => {
          cb("Subscribe to " + username);
        }, 1000);
      }
      const message = importantAction("Arnab", function (name) {
        console.log(name);
      });
      console.log("finish");
      break;
    }
  }
}

// runExample(1);
runExample(2);
