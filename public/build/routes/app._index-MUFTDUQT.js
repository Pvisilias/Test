import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  Banner,
  Button,
  Layout,
  LegacyCard,
  MediaCard,
  Page,
  VideoThumbnail,
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app._index.tsx
init_remix_hmr();
var import_react = __toESM(require_react());
init_esm();
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index.tsx"
  );
  import.meta.hot.lastModified = "1707821059370.3123";
}
function Index() {
  _s();
  const [showBanner, setShowBanner] = (0, import_react.useState)(true);
  const handleVideoClick2 = () => {
    window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "DashBoard", primaryAction: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { url: "/app/support", variant: "primary", children: "Support" }, void 0, false, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 46,
    columnNumber: 49
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { title: "Cart Type Compatibility", tone: "critical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Our app currently supports only 'page type' carts. Ensure your cart settings are correctly configured to avoid any disruptions in service. We're working to expand compatibility and appreciate your understanding." }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      showBanner && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { title: "Coming Soon: Checkout Form", onDismiss: () => setShowBanner(false), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "New update ahead! We're close to launching our Checkout Form feature and Annual Plans, elevating your and your customers' experience. Stay tuned." }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 54,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { title: "Installation Guide", primaryAction: {
        content: "Learn more",
        url: "/app/guide"
      }, description: `Check out our quick tutorial on how to seamlessly integrate AFM Filler into your Shopify store.`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
        objectFit: "cover",
        objectPosition: "center"
      }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/How_Works.png?v=1707650074" }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { sectioned: true, title: "Customise Your Form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          marginBottom: "15px"
        }, children: " Unlock the full potential of your forms. Tailor them to match your brand and meet your needs." }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { url: "/app/confiq", children: "Start Customizing" }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { title: "See AFM Filler in Action", primaryAction: {
        content: "Watch Video",
        onAction: () => {
          window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank");
        }
      }, description: `Watch our detailed video guide to understand exactly how AFM Filler streamlines your workflow and improves customer experience on your Shopify store.`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VideoThumbnail, { videoLength: 80, thumbnailUrl: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/How_Works2.png?v=1707650640", onClick: handleVideoClick2 }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { title: "Feedback", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your insights drive our improvements. Share your thoughts and help shape the future of AFM Filler." }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 87,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank"), children: "Give Feedback" }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { title: "What's Next", subdued: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Stay ahead with our upcoming features and updates designed to enhance your Shopify experience." }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank"), children: "See What's Coming" }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(Index, "BsmEZTTw1tqXoO6H0bjxXmaHlKI=");
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/app._index-MUFTDUQT.js.map
