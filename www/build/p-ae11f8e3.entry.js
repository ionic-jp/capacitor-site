import{r as o,h as e}from"./p-db2aa20e.js";const r=class{constructor(e){o(this,e)}handleClick(o){if(document.location.hash!=="#"+this.to){document.location.hash=this.to;let o=document.querySelector("html").scrollTop;window.scrollTo(0,o-80)}else document.location.hash="",document.location.hash=this.to}render(){return e("div",{onClick:this.handleClick.bind(this)},e("slot",null))}};r.style=":root{--color-capacitor-blue:#119eff;--button-background:var(--color-capacitor-blue);--color-woodsmoke:#16161d;--color-dolphin:#626177;--color-gunpowder:#505061;--color-manatee:#8888a2;--color-cadet-blue:#abb2bf;--color-whisper:#ebebf7;--color-selago:#f4f4fd;--color-white-lilac:#f8f8fc;--color-white:#fff;--color-grey-blue:#73849a;--color-green-haze:#00ab47;--color-dodger-blue:#1d9aff;--color-dodger-blue-hover:rgba(#1d9aff, 0.2);--color-old-lace:#fdf5e4;--color-wheatfield:#f1e3c5;--color-pirate-gold:#9a6400;--button-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);--button-shadow-hover:0 4px 6px rgba(0, 0, 0, 0.12),\n    0 1px 3px rgba(0, 0, 0, 0.08);--ease-out-expo:cubic-bezier(0.19, 1, 0.22, 1);--line-rule-color:#edf2f6}anchor-link{cursor:pointer;user-select:none}anchor-link.hover-anchor{position:absolute;margin-left:-25px;color:#d6d1d1}.anchor-link-relative{position:relative}.anchor-link-relative{position:relative}@media screen and (max-width: 768px){anchor-link.hover-anchor{margin-left:-18px}}";export{r as anchor_link}