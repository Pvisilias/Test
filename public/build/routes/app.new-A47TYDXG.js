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

// app/routes/app.new.tsx
init_remix_hmr();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.new.tsx"
  );
  import.meta.hot.lastModified = "1707822654136.7837";
}
function New() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "What's New", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { title: "Upcoming: Essential Plan", primaryAction: {
      content: "Learn More",
      onAction: () => {
        window.open("https://5minuteslogo.com/pages/apps", "_blank");
      }
    }, description: "Unlock the power to customize your form to align perfectly with your brand. Tailor-made for seamless integration, the Essential Plan is your next step towards a personalized shopping experience.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Form1.png?v=1707508765" }, void 0, false, {
      fileName: "app/routes/app.new.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.new.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { title: "Current Form Compatibility", primaryAction: {
      content: "View Details",
      onAction: () => {
        window.open("https://5minuteslogo.com/pages/apps", "_blank");
      }
    }, description: "For now, our app operates flawlessly with page type carts, enhancing your store's efficiency. We're diligently working to extend compatibility to drawer carts, broadening your possibilities.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Cart1.png?v=1707508765" }, void 0, false, {
      fileName: "app/routes/app.new.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.new.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { title: "Premium Plan: Coming Soon", primaryAction: {
      content: "Get Notified",
      onAction: () => {
        window.open("https://5minuteslogo.com/pages/apps", "_blank");
      }
    }, description: "Anticipate the launch of our Premium Plan, designed to integrate the form directly into the checkout process. Elevate the user experience by ensuring a smooth and swift checkout for every customer.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Form.png?v=1707508764" }, void 0, false, {
      fileName: "app/routes/app.new.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.new.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.new.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = New;
var _c;
$RefreshReg$(_c, "New");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  New as default
};
//# sourceMappingURL=/build/routes/app.new-A47TYDXG.js.map
