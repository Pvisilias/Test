import {
  Button,
  Collapsible,
  LegacyCard,
  LegacyStack,
  MediaCard,
  Page,
  Text,
  TextContainer,
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

// app/routes/app.support.tsx
init_remix_hmr();
init_esm();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.support.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.support.tsx"
  );
  import.meta.hot.lastModified = "1707767941802.6396";
}
function Support() {
  _s();
  const [open, setOpen] = (0, import_react.useState)(null);
  const handleToggle = (0, import_react.useCallback)((id) => {
    setOpen((currentOpen) => currentOpen === id ? null : id);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "What's New", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { title: "Report a Problem", primaryAction: {
      content: "Contact Us",
      onAction: () => {
        window.open("https://5minuteslogo.com/pages/contact", "_blank");
      }
    }, description: "Encountered an issue? Let us know how we can help. Your feedback is crucial for improving your experience.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Contact.png?v=1707508806" }, void 0, false, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaCard, { title: "Share Your Insights", primaryAction: {
      content: "Share Your Ideas",
      onAction: () => {
        window.open("https://5minuteslogo.com/pages/contact", "_blank");
      }
    }, description: "We love hearing from our users! Share your innovative ideas or suggestions on how we can make our app even better.", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { alt: "", width: "100%", height: "100%", style: {
      objectFit: "cover",
      objectPosition: "center"
    }, src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/feedback2.png?v=1707508764" }, void 0, false, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      height: "100%",
      marginTop: "18px",
      marginBottom: "20px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { sectioned: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        paddingLeft: "0.75rem",
        marginTop: "0.5rem",
        marginBottom: "1rem"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "headingLg", children: "FAQ" }, void 0, false, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 66,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 61,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderTop: "0.0625rem solid #dde0e4",
          paddingBlockStart: "15px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disclosure: true, variant: "tertiary", onClick: () => handleToggle("collapsible1"), ariaExpanded: open === "collapsible1", ariaControls: "collapsible1", textAlign: "start", children: "Does the app work with drawer type carts?" }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 73,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: open === "collapsible1", id: "collapsible1", transition: {
          duration: "200ms",
          timingFunction: "ease-in-out"
        }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          paddingLeft: "0.75rem",
          paddingBottom: "0.75rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " Currently, our app is optimized for page type carts and does not support drawer type carts. We are actively working on expanding our compatibility to include drawer type carts, aiming to offer this functionality in the near future." }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 87,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 83,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 82,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 77,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderTop: "0.0625rem solid #dde0e4",
          paddingBlockStart: "15px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disclosure: true, variant: "tertiary", onClick: () => handleToggle("collapsible2"), ariaExpanded: open === "collapsible2", ariaControls: "collapsible2", textAlign: "start", children: "What should I do if the form isn't working properly?" }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 100,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: open === "collapsible2", id: "collapsible2", transition: {
          duration: "200ms",
          timingFunction: "ease-in-out"
        }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          paddingLeft: "0.75rem",
          paddingBottom: "0.75rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `If you encounter any issues with the form, please first ensure that your cart type is set to page, as our app currently supports only this format. If the problem persists, don't hesitate to report the issue through our "Report a Problem" section in the support page. Provide as much detail as possible to help us resolve your issue swiftly.` }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 113,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 109,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 108,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 104,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 95,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderTop: "0.0625rem solid #dde0e4",
          paddingBlockStart: "15px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disclosure: true, variant: "tertiary", onClick: () => handleToggle("collapsible3"), ariaExpanded: open === "collapsible3", ariaControls: "collapsible3", textAlign: "start", children: "Can I use the app on multiple stores with one subscription?" }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 124,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 120,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: open === "collapsible3", id: "collapsible3", transition: {
          duration: "200ms",
          timingFunction: "ease-in-out"
        }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          paddingLeft: "0.75rem",
          paddingBottom: "0.75rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Each subscription is valid for a single Shopify store. If you wish to use our app across multiple stores, you'll need to subscribe separately for each store to ensure proper functionality and support." }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 137,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 133,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 132,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 128,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 119,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderTop: "0.0625rem solid #dde0e4",
          paddingBlockStart: "15px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disclosure: true, variant: "tertiary", onClick: () => handleToggle("collapsible4"), ariaExpanded: open === "collapsible4", ariaControls: "collapsible4", textAlign: "start", children: "Is there a user manual or guide for the app?" }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 148,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 144,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: open === "collapsible4", id: "collapsible4", transition: {
          duration: "200ms",
          timingFunction: "ease-in-out"
        }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          paddingLeft: "0.75rem",
          paddingBottom: "0.75rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: 'Yes, we provide a comprehensive user guide that covers all aspects of setting up and using the app effectively. You can find this guide in the "Guied" section of our app or on our support page. If you have any further questions, our support team is always ready to assist you.' }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 161,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 157,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 156,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 152,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 143,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderTop: "0.0625rem solid #dde0e4",
          paddingBlockStart: "15px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disclosure: true, variant: "tertiary", onClick: () => handleToggle("collapsible5"), ariaExpanded: open === "collapsible5", ariaControls: "collapsible5", textAlign: "start", children: "Does the AFM Filler work with all Shopify themes?" }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 172,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 168,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: open === "collapsible5", id: "collapsible5", transition: {
          duration: "200ms",
          timingFunction: "ease-in-out"
        }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          paddingLeft: "0.75rem",
          paddingBottom: "0.75rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Yes, the AFM Filler is designed to be compatible with all official Shopify themes. We've worked diligently to ensure seamless integration across a wide range of designs and layouts. " }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 185,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 181,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 180,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 176,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 167,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderTop: "0.0625rem solid #dde0e4",
          paddingBlockStart: "15px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disclosure: true, variant: "tertiary", onClick: () => handleToggle("collapsible6"), ariaExpanded: open === "collapsible6", ariaControls: "collapsible6", textAlign: "start", children: "How can I share my ideas or suggestions for the app?" }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 196,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 192,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: open === "collapsible6", id: "collapsible6", transition: {
          duration: "200ms",
          timingFunction: "ease-in-out"
        }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          paddingLeft: "0.75rem",
          paddingBottom: "0.75rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: `We value your feedback and ideas! If you have suggestions on how we can improve or new features you'd like to see, please share them with us through the "Share Your Insights" section in our support page. Your input is crucial for our continuous improvement.` }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 209,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 205,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 204,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 200,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 191,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyStack, { vertical: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          borderTop: "0.0625rem solid #dde0e4",
          paddingBlockStart: "15px"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, disclosure: true, variant: "tertiary", onClick: () => handleToggle("collapsible7"), ariaExpanded: open === "collapsible7", ariaControls: "collapsible7", textAlign: "start", children: "Do you have any questions?" }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 220,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 216,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapsible, { open: open === "collapsible7", id: "collapsible7", transition: {
          duration: "200ms",
          timingFunction: "ease-in-out"
        }, expandOnPrint: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          paddingLeft: "0.75rem",
          paddingBottom: "0.75rem"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "If you have any further questions or need assistance with anything not covered in our FAQs, please don't hesitate to reach out. Our support team is here to help you with any inquiries, technical issues, or feedback you may have. Contact us through the support page, and we'll make sure to address your needs promptly." }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 233,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 229,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 228,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 224,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 215,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.support.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(Support, "FxQHQ9BDWAuUg1Yo/sAh76iO6n4=");
_c = Support;
var _c;
$RefreshReg$(_c, "Support");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Support as default
};
//# sourceMappingURL=/build/routes/app.support-6LSBBIML.js.map
