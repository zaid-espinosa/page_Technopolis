function startApp(){fixedNavigation(),createGalery(),scrollNav()}function fixedNavigation(){let e=document.querySelector(".header"),t=document.querySelector(".about-room"),i=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(e.classList.add("fix"),i.classList.add("body-scroll")):(e.classList.remove("fix"),i.classList.remove("body-scroll"))}))}function scrollNav(){document.querySelectorAll(".main-navigation a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();let t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})}))})}function createGalery(){let e=document.querySelector(".image-galery");for(let t=1;t<=12;t++){let i=document.createElement("picture");i.innerHTML=`\n            <source srcset="build/img/thumb/${t}.avif" type="imagen/avif">\n            <source srcset="build/img/thumb/${t}.webp" type="imagen/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="">\n        `,i.onclick=function(){showImage(t)},e.appendChild(i)}}function showImage(e){let t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/big/${e}.avif" type="imagen/avif">\n        <source srcset="build/img/big/${e}.webp" type="imagen/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/big/${e}.jpg" alt="">\n    `;let i=document.createElement("DIV");i.appendChild(t),i.classList.add("overlay"),i.onclick=function(){document.querySelector("body").classList.remove("fix-body"),i.remove()};let n=document.createElement("P");n.textContent="X",n.classList.add("btn-close"),n.onclick=function(){document.querySelector("body").classList.remove("fix-body"),i.remove()},i.appendChild(n);let o=document.querySelector("body");o.appendChild(i),o.classList.add("fix-body")}document.addEventListener("DOMContentLoaded",(function(){startApp()}));
//# sourceMappingURL=app.js.map
