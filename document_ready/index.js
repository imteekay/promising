const wrapperResolved = () => {
  const completion = document.querySelector(".completion");
  completion.innerHTML = "Resolved!";
}

const callback = (resolve) => {
  document.addEventListener("readystatechange", function () {
    if (document.readyState != "loading") {
      resolve();
    }
  });
}

const ready = () => new Promise(callback);

ready().then(wrapperResolved);
