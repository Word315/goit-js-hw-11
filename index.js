import{a as y,S as c,i as n}from"./assets/vendor-BfjKTZs6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="49577891-dd8edba8495efad2486051016",p="https://pixabay.com/api/";async function h(a){return(await y.get(p,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}function b(a){const r=document.querySelector(".gallery"),o=a.map(({webformatURL:e,largeImageURL:t,tags:s,likes:u,views:d,comments:f,downloads:m})=>`
        <li class="gallery-item">
            <a href="${t}" data-lightbox="gallery">
                <img src="${e}" alt="${s}" />
            </a>
            <div class="info">
                <p>❤️ ${u} | 👁️ ${d} | 💬 ${f} | ⬇️ ${m}</p>
            </div>
        </li>
    `).join("");r.innerHTML=o,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector(".form"),x=document.querySelector(".gallery"),l=document.querySelector(".loader");let S;L.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){n.error({title:"Error",message:"Please enter a search term."});return}x.innerHTML="",l.style.display="block";try{const o=await h(r);o.length===0?n.warning({title:"Warning",message:"No images found. Try again!"}):(b(o),S=new c(".gallery a",{captionsData:"alt",captionDelay:250}))}catch{n.error({title:"Error",message:"Failed to fetch images. Try again later."})}finally{l.style.display="none"}});
//# sourceMappingURL=index.js.map
