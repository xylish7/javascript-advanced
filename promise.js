function wait(ms, fail = false) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (fail) {
        reject("error");
      }
      resolve(undefined);
    }, ms)
  );
}

async function logAfter() {
  console.log("start resolve");
  await wait(1000);
  console.log("1s\n");

  console.log("start reject");
  try {
    await wait(1000, true);
  } catch (error) {
    console.log("1s error");
  }
}

logAfter();
