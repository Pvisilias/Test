import {
  MediaCard,
  Page,
  init_esm
} from "/build/_shared/chunk-UIAKPZRK.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-DKYKUFCK.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.guide.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.guide.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.guide.tsx"
  );
  import.meta.hot.lastModified = "1707767929475.4731";
}
function Guide() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "3 Installation Steps", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { portrait: true, title: "Step 1: Customize Theme", description: "Begin by navigating to your Shopify Admin panel. Go to 'Online Store' and then select 'Themes'. Find your current theme and click on 'Customize'. This will take you to the theme editor where you can modify your store.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Step1.png" }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { portrait: true, title: "Step 2: Cart Configuration", description: "Once in the theme editor, look to the left side of the page for a menu. Click on 'Settings' and scroll down to find the 'Cart' section. Here, you must change your cart type to 'Page' if it isn't already set to this. Currently, our app operates optimally with the 'page type' cart.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Step2.png" }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { portrait: true, title: "Step 3: App Activation", description: "After adjusting your cart settings, navigate to the 'Apps Embeds' section. Here, you will find the option to 'Activate' our app.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Step3.png" }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { portrait: true, title: "Installation Complete", description: "Congratulations! You've successfully completed the installation process. Your online store is now equipped with our app, ready to enhance your and your customers' experience.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Done.png" }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginTop: "20px"
    } }, void 0, false, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.guide.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = Guide;
var _c;
$RefreshReg$(_c, "Guide");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Guide as default
};
//# sourceMappingURL=/build/routes/app.guide-AZNVXG3B.js.map
