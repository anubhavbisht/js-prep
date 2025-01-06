function asyncTask(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(
        count > 1
          ? `... attempt ${count} -> retry after 3000ms -> failed`
          : `... attempt ${count} -> failed`
      );
    }, 5000);
  });
}

function timer(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function retry(
  asyncFn,
  retries = 3,
  delay = 3000,
  finalError = "Failed completely"
) {
  let status = "pending";
  let count = 1;
  while (count <= retries) {
    try {
      await asyncFn(count);
      status = "success";
      break;
    } catch (e) {
      console.error(e);
      status = "failed";
    } finally {
      await timer(delay);
      count += 1;
    }
  }
  if (status === "failed") {
    console.log(finalError);
  }
}

retry(asyncTask);
