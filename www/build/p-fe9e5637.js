const r=({propertyName:r,link:n,target:t=document.body,defer:o=!0,async:a=!0},s)=>{if(e(r))return s();if(Array.from(document.scripts).some((r=>{if(r.src===n)return r.addEventListener("load",s),!0})))return;const c=document.createElement("script");c.src=n,c.type="text/javascript",c.addEventListener("load",s),c.defer=o,c.async=a,c.onerror=()=>console.warn("error loading resource: "+n),t.appendChild(c)},n=r=>r.toString().concat("px"),e=r=>r&&r.includes(".")?!!r.split(".").reduce(((r,n)=>r.hasOwnProperty(n)?r[n]:null),window):window.hasOwnProperty(r);function t(r){return r?r.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""):""}function o(r){return{href:r}}export{o as h,r as i,n as p,t as s}