import{r as o,h as r}from"./p-db2aa20e.js";import{a as t}from"./p-82a85041.js";import{s}from"./p-49288e77.js";const c=class{constructor(r){o(this,r),this.headings=new Map}componentDidLoad(){t((({entries:o})=>{o.forEach((({target:o,intersectionRatio:r})=>{if(!this.headings.get(o.id))return;this.headings.get(o.id).inView=0!==r})),this.getFirstInView()})),this.titleNames.map((o=>{const r="h-"+s(o),t=document.getElementById(r);this.headings.set(r,Object.assign(Object.assign({},this.headings.get(r)),{headingEl:t}))}))}getFirstInView(){let o=!1;for(const r of this.headings.values())r.tocEl&&(r.inView&&!o?(r.tocEl.classList.add("active"),o=!0):r.tocEl.classList.remove("active"));if(!o){const{tocEl:o}=[...this.headings.values()].reduce(((o,r,t)=>{var s,c;const i=null===(s=r.headingEl)||void 0===s?void 0:s.offsetTop,e=null===(c=o.headingEl)||void 0===c?void 0:c.offsetTop;return 0!==t&&e?Math.abs(window.scrollY-i)<Math.abs(window.scrollY-e)?r:o:r}));null==o||o.classList.add("active")}}handleTocClick(o){var r;const t=o.target;if(!(null===(r=null==t?void 0:t.dataset)||void 0===r?void 0:r.id))return;const s=this.headings.get(t.dataset.id).headingEl;window.scrollTo({top:s.offsetTop-100,behavior:"smooth"})}render(){return r("nav",null,r("ul",null,this.titleNames.map((o=>r("li",{class:"ui-paragraph-4",onClick:o=>this.handleTocClick(o),"data-id":"h-"+s(o),ref:o=>{var r;const t=null===(r=null==o?void 0:o.dataset)||void 0===r?void 0:r.id;t&&o&&this.headings.set(t,Object.assign(Object.assign({},this.headings.get(t)),{tocEl:o}))}},o)))))}};c.style=".sc-resource-toc-h{display:block;position:sticky;top:96px}@media (max-width: 768px){.sc-resource-toc-h{display:none}}nav.sc-resource-toc{margin:0;padding:0}ul.sc-resource-toc{font-size:14px;list-style:none;line-height:1.4em;padding:0 0 16px}li.sc-resource-toc{color:var(--c-carbon-80);margin-block-start:var(--space-1);margin-block-end:var(--space-1);cursor:pointer;list-style:none;color:var(--c-carbon-80);display:block;transition:0.2s transform ease, 0.2s color}li.active.sc-resource-toc{transform:translateX(8px);color:#597EFF}.title.sc-resource-toc{color:var(--c-indigo-60)}.cta-button.sc-resource-toc{margin-block-start:var(--space-3);font-weight:600;border-radius:6px;letter-spacing:0;text-transform:none;padding:12px 19px 10px;font-size:14px;line-height:1em;background:#3880FF;color:#fff}.sharing.sc-resource-toc{margin:0;border-top:2px solid #f3f5f9;padding-top:26px}.sharing.sc-resource-toc li.sc-resource-toc{margin:0;margin-right:6px;display:inline-block}.sharing.sc-resource-toc a.sc-resource-toc{color:#CBD2DD;font-size:20px}.sharing.sc-resource-toc a.sc-resource-toc:hover{color:var(--c-ionic-brand)}.sharing.sc-resource-toc #web-share.sc-resource-toc{display:none}";export{c as resource_toc}