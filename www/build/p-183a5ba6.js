import{h as o}from"./p-db2aa20e.js";import{a as t}from"./p-12b41941.js";const c=(o,t,c,e,n)=>{const i=[];return i.push("ui-col"),i.push(o?"ui-col-"+o:"ui-col-12"),t&&i.push("ui-col-xs-"+t),c&&i.push("ui-col-sm-"+c),e&&i.push("ui-col-md-"+e),n&&i.push("ui-col-lg-"+n),i.join(" ")},e=(e,n)=>{var{cols:i,xs:s,sm:a,md:l,lg:r,as:d="div"}=e,u=function(o,t){var c={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&t.indexOf(e)<0&&(c[e]=o[e]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(e=Object.getOwnPropertySymbols(o);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(o,e[n])&&(c[e[n]]=o[e[n]])}return c}(e,["cols","xs","sm","md","lg","as"]);return o(d,Object.assign({},t(u,{class:c(i,s,a,l,r)})),n)},n=(o,t="Docs")=>{s("View",o,t),a("View",o,t)},i=(o,t,c="Docs")=>{t&&t.preventDefault(),s("Click",o,c),a("Click",o,c),setTimeout((()=>{const o=l(null==t?void 0:t.target);o.target&&"_blank"===o.target.toLowerCase()?window.open(o.href):o.href&&(document.location=o.href)}),150)},s=(o,t,c)=>{(window._hsq=window._hsq||[]).push(["trackEvent",{id:`${c} ad - ${o} - ${t}`}])},a=(o,t,c)=>{window.gtag?window.gtag("event",`Docs ad - ${o} - ${t}`,{event_category:`${c} ad - ${o}`,event_label:t}):console.warn("Unable to track Google Analytics event, gtag not found",o,t)},l=o=>o.href?o:o.parentNode?l(o.parentNode):void 0;export{e as C,i as a,n as t}