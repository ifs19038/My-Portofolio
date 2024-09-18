const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});

const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

document.getElementById("downloadBtn").addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "cv/Jogi Arif Guruh Sitinjak.pdf";  
  link.download = "Jogi Arif Guruh Sitinjak.pdf"; 
  link.click();
});
