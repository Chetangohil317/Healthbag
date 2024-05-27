// let nav = document.querySelector("header");
// window.addEventListener("scroll", ()=>{
//   if(document.documentElement.scrollTop > 50){
//     nav.classList.add("sticky");
//   }else{
//     nav.classList.remove("sticky");
//   }
// });
const eroSection = document.querySelector(".navbar");

const footerElem = document.querySelector(".footer-section");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<i class="ph scroll-top ph-arrow-up"></i>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  eroSection.scrollIntoView({ behavior : "smooth"});
};
// window.addEventListener("scroll", ()=>{
//       if(document.documentElement.scrollTop > 50){
//         nav.classList.add("scroollElement");
//       }else{
//         nav.classList.remove("scroollElement");
//       }
//     });

scroollElement.addEventListener("click", scrollTop);