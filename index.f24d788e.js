const e=["https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/001.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/002.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/003.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/004.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/005.jpg?raw=true","https://github.com/SebastianAdamoszek/CV/blob/main/src/img/gallery/006.jpg?raw=true"];document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".backdrop"),n=document.querySelector(".modal"),s=document.getElementById("prevButton"),i=document.getElementById("nextButton"),o=document.getElementById("image");function a(){const e=document.querySelector(".modal"),t=document.querySelector(".backdrop");e.classList.add("is-visible"),t.classList.add("is-visible"),m(),window.addEventListener("keydown",r),t.addEventListener("click",l),s.addEventListener("click",g),i.addEventListener("click",u)}function c(){n.classList.remove("is-visible"),t.classList.remove("is-visible"),window.removeEventListener("keydown",r),t.removeEventListener("click",l),s.removeEventListener("click",g),i.removeEventListener("click",u)}function r(e){"Escape"===e.key&&c()}function l(e){e.target.classList.contains("backdrop")&&c()}function m(){o.src=e[b]}function d(){const e=document.getElementById("image");e.style.transition="transform .5s ease-in-out",e.style.transform="scale(0.01, 0.98)",setTimeout((()=>{e.style.transition="transform .5s ease-in-out",e.style.transform="scaleX(1)"}),500)}function u(){b=(b+1)%e.length,d(),setTimeout((()=>{m()}),500)}function g(){b=(b-1+e.length)%e.length,d(),setTimeout((()=>{m()}),500)}document.querySelectorAll("[data-modal-open]").forEach((e=>{e.addEventListener("click",a)}));let b=0}));
//# sourceMappingURL=index.f24d788e.js.map