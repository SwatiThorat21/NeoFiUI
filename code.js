let dropDownList = document.getElementById("dropDownList");
let container = document.getElementById("container");
let container2 = document.getElementById("container2");
let xmark = document.getElementById("xmark");

dropDownList.addEventListener("click", () => {
  container2.style.display = "block";
  container.classList.add("backgroundOpacity");
});

xmark.addEventListener("click", () => {
  container2.style.display = "none";
  container.classList.remove("backgroundOpacity");
});
