async function fetchDataA() {
  try {
    console.log("Fetching data in A...");
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Task A", age: 30 });
      }, 2000);
    });
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchDataB() {
  try {
    console.log("Fetching data in B...");
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 2, name: "TaskB", age: 30 });
      }, 2000);
    });
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchDataC() {
  try {
    console.log("Fetching data in C...");
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 3, name: "Task C", age: 30 });
      }, 2000);
    });
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchDataD(dataA, dataB) {
  try {
    console.log("Fetching data in D using A and B...");
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 4, name: "Task D", age: 30 });
      }, 2000);
    });
    console.log("Data received:", data, dataA, dataB);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchDataE(dataC, dataD) {
  try {
    console.log("Fetching data in E using D and C...");
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id: 5, name: "Task E", age: 30 });
      }, 2000);
    });
    console.log("Data received:", data, dataC, dataD);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function dependentTasks() {
  const result1 = await Promise.all([fetchDataA(), fetchDataB(), fetchDataC()]);
  console.log(result1);
  const result2 = await fetchDataD(result1[0], result1[1]);
  console.log(result2);
  const result3 = await fetchDataE(result1[2], result2);
  console.log(result3)
}
dependentTasks()