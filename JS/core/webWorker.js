Web Worker
JavaScript code that runs in the background and does not influence the page's performance.


let t = new Date();
console.log(`tastk 1 took: ${new Date() - t}ms`);
console.log(`tastk 2 took: ${new Date() - t}ms`);
console.log(`tastk 3 took: ${new Date() - t}ms`);

// tastk 1 took: 0ms
// tastk 2 took: 0ms
// tastk 3 took: 1ms

//index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Web Workers</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- counter -->
    <script>
      let i = 0;
      let intervalId = null;
      const counter = () => {
        if (!intervalId) {
          intervalId = setInterval(() => {
            i++;
            document.getElementById("counter").innerText = i;
          }, 300);
        } else {
          clearInterval(intervalId);
          i = 0;
          document.getElementById("counter").innerText = i;
          intervalId = null;
        }
      };
    </script>

    <!-- longCalculation -->
    <script>
      const longCalculation = () => {
        let i = 0;
        while (i <= 10000000000) {
          i++;
        }
        alert("Long calculation finished!");
      };
    </script>
  </head>
  <body>
    <h3>Counter: <span id="counter"> # </span></h3>
    <button onclick="counter()">Start Counter</button>
    <button onclick="longCalculation()">Long Calculation</button>
  </body>
</html>
creating button 
<button onclick="workerCalculation()">Worker Calculation</button>


// worker.js

let i = 0;
while (i <= 1e5) {
  i++;
}
postMessage("Worker calculation finished!");

//file.js

 const workerCalculation = () => {
    let worker = new Worker("worker.js");
    worker.onmessage = (e) => {
      alert(e.data);
    };
  };


JS is single threaded language, so it handles one task at time. To work with cpu intensive task by using web worker it will run on separate thread.
