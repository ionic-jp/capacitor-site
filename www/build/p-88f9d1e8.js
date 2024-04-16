import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-53e52cf1.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.2.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-58af1012.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["capacitor-site",[[0,"capacitor-site"]]],["docs-root",[[0,"docs-root"]]],["resource-webinar",[[2,"resource-webinar",{"prismicData":[16],"state":[8]}]]],["resource-article",[[2,"resource-article",{"prismicData":[16]}]]],["avc-code-type",[[1,"avc-code-type",{"typeId":[1,"type-id"]}]]],["blog-pagination",[[2,"blog-pagination",{"linkText":[16],"rssIcon":[4,"rss-icon"]}]]],["blog-search",[[2,"blog-search"]]],["capacitor-site-platform-bar",[[0,"capacitor-site-platform-bar"]]],["resource-case-study",[[2,"resource-case-study",{"prismicData":[16]}]]],["resource-whitepaper",[[2,"resource-whitepaper",{"prismicData":[16]}]]],["blog-forum-link",[[6,"blog-forum-link",{"href":[1]}]]],["blog-social-actions",[[2,"blog-social-actions",{"post":[16],"column":[4],"loaded":[32]}]]],["capacitor-hubspot-form",[[0,"capacitor-hubspot-form",{"formId":[1,"form-id"],"portalId":[1,"portal-id"],"goToWebinarKey":[1,"go-to-webinar-key"],"ajax":[4],"error":[32]},[[8,"message","handleWindowMessage"]]]]],["disqus-comments",[[2,"disqus-comments",{"url":[1],"siteId":[1,"site-id"]}]]],["doc-snippet",[[0,"doc-snippet"]]],["plugin-platforms",[[0,"plugin-platforms",{"platforms":[1]}]]],["top-parallax",[[2,"top-parallax"]]],["ui-blockquote",[[4,"ui-blockquote"]]],["ui-box",[[4,"ui-box"]]],["ui-breadcrumbs",[[4,"ui-breadcrumbs"]]],["ui-breakpoint",[[4,"ui-breakpoint",{"xs":[4],"sm":[4],"md":[4],"lg":[4],"xl":[4],"display":[1]}]]],["ui-button",[[4,"ui-button"]]],["ui-card",[[4,"ui-card",{"embelish":[4]}]]],["ui-date-time",[[4,"ui-date-time",{"date":[16],"format":[16]}]]],["ui-dropdown",[[4,"ui-dropdown",{"open":[4]}]]],["ui-grid",[[4,"ui-grid"]]],["ui-heading",[[4,"ui-heading",{"level":[2],"poster":[4],"as":[1]}]]],["ui-paragraph",[[4,"ui-paragraph",{"level":[2],"leading":[1]}]]],["ui-responsive-container",[[4,"ui-responsive-container",{"as":[1]}]]],["ui-skeleton",[[4,"ui-skeleton"]]],["ui-text",[[4,"ui-text"]]],["ui-theme-provider",[[4,"ui-theme-provider",{"type":[1]}]]],["shared-demo",[[0,"shared-demo",{"data":[32]}]]],["anchor-link",[[4,"anchor-link",{"to":[1]}]]],["component-detail",[[0,"component-detail",{"component":[1],"example":[1]}]]],["component-list",[[0,"component-list"]]],["component-overview",[[0,"component-overview",{"component":[1]}]]],["wistia-video",[[2,"wistia-video",{"videoId":[1,"video-id"],"width":[32],"height":[32]},[[9,"resize","handleWindowResize"]]]]],["platform-bar",[[0,"platform-bar",{"productName":[1,"product-name"],"containerClass":[1,"container-class"]}]]],["resource-toc",[[2,"resource-toc",{"titleNames":[16]}]]],["site-root",[[4,"site-root"]]],["code-snippet",[[1,"code-snippet",{"language":[1],"code":[1]}]]],["capacitor-site-footer",[[0,"capacitor-site-footer"]]],["cordova-page",[[2,"cordova-page",{"selectedCodeTab":[32]}]]],["blog-page",[[2,"blog-page",{"data":[16]}]]],["pre-footer",[[2,"pre-footer"]]],["landing-page",[[2,"landing-page",{"data":[8],"selectedCodeTab":[32],"ebookModalOpen":[32]}]]],["enterprise-page",[[2,"enterprise-page",{"data":[8],"ebookModalOpen":[32]}]]],["solution-page",[[2,"solution-page",{"solutionId":[1,"solution-id"]}]]],["community-page",[[2,"community-page",{"data":[8]}]]],["telemetry-page",[[2,"telemetry-page",{"data":[8]}]]],["app-menu-toggle",[[0,"app-menu-toggle",{"icon":[1]}]]],["in-page-navigation",[[0,"in-page-navigation",{"headings":[16],"editUrl":[1,"edit-url"],"editApiUrl":[1,"edit-api-url"],"url":[1],"itemOffsets":[32],"selectedId":[32],"isPluginPage":[32]}]]],["more-button",[[0,"more-button",{"icon":[1]}]]],["announcement-bar",[[2,"announcement-bar",{"prismicData":[8,"prismic-data"]}]]],["contributor-list",[[0,"contributor-list",{"contributors":[16],"editUrl":[1,"edit-url"],"editApiUrl":[1,"edit-api-url"]}]]],["code-tabs",[[2,"code-tabs",{"data":[16],"activeTab":[32],"codeLeft":[32]}]]],["ion-icon",[[1,"ion-icon",{"mode":[1025],"color":[1],"ariaLabel":[1537,"aria-label"],"ariaHidden":[513,"aria-hidden"],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[1],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]}]]],["site-modal",[[4,"site-modal",{"open":[1028],"modalClose":[16],"visible":[32]},[[8,"keyup","handleKeyUp"]]]]],["resource-meta",[[2,"resource-meta",{"tags":[16]}]]],["version-select",[[2,"version-select",{"expanded":[32]},[[8,"click","closeSelect"]]]]],["internal-ad",[[0,"internal-ad",{"ad":[32],"update":[64]}]]],["docs-dropdown",[[4,"docs-dropdown",{"align":[1],"icon":[16],"isOpen":[32],"close":[64],"open":[64],"toggle":[64]},[[8,"click","handleClick"],[0,"keyup","handleKeyup"]]]]],["lower-content-nav",[[2,"lower-content-nav",{"navigation":[16]}]]],["site-backdrop",[[2,"site-backdrop",{"visible":[4],"mobileOnly":[4,"mobile-only"]}]]],["blog-post",[[0,"blog-post",{"preview":[4],"data":[16],"ogAssetPath":[32],"moreResources":[32]}]]],["blog-newsletter",[[2,"blog-newsletter",{"email":[32],"isLoading":[32],"hasSubmitted":[32],"isValid":[32],"inlineMessage":[32]}]]],["enterprise-subnav",[[2,"enterprise-subnav",{"visible":[32]}]]],["blog-subnav",[[2,"blog-subnav",{"breadcrumbs":[16],"socialActions":[4,"social-actions"],"pagination":[4],"sticky":[32],"open":[32]}]]],["newsletter-signup",[[0,"newsletter-signup"]]],["hubspot-form",[[0,"hubspot-form",{"formId":[1,"form-id"],"portalId":[1,"portal-id"],"goToWebinarKey":[1,"go-to-webinar-key"],"ajax":[4],"submitArrow":[4,"submit-arrow"],"buttonPosition":[1,"button-position"],"error":[32]},[[8,"message","handleWindowMessage"]]]]],["resource-author-item",[[2,"resource-author-item",{"author":[16]}]]],["resource-card",[[2,"resource-card",{"prismicData":[16],"row":[4],"headingLevel":[2,"heading-level"],"type":[4],"tags":[4],"author":[4],"description":[4],"routing":[16]}]]],["more-resources",[[2,"more-resources",{"resourceData":[16],"resources":[16],"headingLevel":[2,"heading-level"],"type":[4],"tags":[4],"description":[4],"author":[4],"routing":[16]}]]],["meta-tags",[[0,"meta-tags",{"pageTitle":[1,"page-title"],"description":[1],"image":[1],"authorTwitter":[1,"author-twitter"],"ogType":[1,"og-type"],"canonicalUrl":[1,"canonical-url"]}]]],["docs-component",[[2,"docs-component",{"data":[16],"showBackdrop":[32]},[[0,"menuToggleClick","toggleMenu"],[0,"menuToggled","menuToggled"]]]]],["docs-menu",[[2,"docs-menu",{"template":[1],"toc":[16],"activePath":[1,"active-path"],"expands":[32],"showOverlay":[32],"toggleOverlayMenu":[64]}]]],["docs-search",[[0,"docs-search",{"theme":[1],"placeholder":[1],"input":[32],"searchStats":[32]},[[9,"resize","getContentStats"]]]]],["site-header",[[2,"site-header",{"template":[1],"includeLogo":[4,"include-logo"],"includeBurger":[4,"include-burger"],"theme":[1],"sticky":[4],"collapsed":[32],"expanded":[32],"scrolled":[32]}]]]], options);
});
