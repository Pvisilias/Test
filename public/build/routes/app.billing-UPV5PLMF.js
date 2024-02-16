import {
  app_subscriptionBtn_default
} from "/build/_shared/chunk-VQCCR7Z7.js";
import {
  app_cancelBtn_default
} from "/build/_shared/chunk-MR3ZVO5Q.js";
import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  init_esm2 as init_esm,
  useLoaderData
} from "/build/_shared/chunk-UMY6WAKM.js";
import {
  BlockStack,
  Button,
  Icon,
  Layout,
  LegacyCard,
  Page,
  SvgCheckIcon,
  SvgXIcon,
  Text,
  init_dist,
  init_esm as init_esm2
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

// app/routes/app.billing.tsx
init_remix_hmr();
init_esm2();
init_dist();
var import_shopify = __toESM(require_shopify());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.billing.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.billing.tsx"
  );
  import.meta.hot.lastModified = "1707821354761.2842";
}
function LayoutExample() {
  _s();
  const {
    isSubscribed
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Plans", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "heading2xl", tone: "success", fontWeight: "regular", children: "BASIC" }, void 0, false, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            marginTop: "10px"
          }, children: "Automated form filling without customization options." }, void 0, false, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 60,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center",
            marginTop: "20px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "heading3xl", fontWeight: "bold", children: "\u20AC10" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 70,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem",
              marginTop: "10px"
            }, children: "/month" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 73,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 65,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginTop: "15px"
          }, children: [
            isSubscribed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, pressed: true, disabled: true, children: "Current Plan" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 81,
              columnNumber: 49
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(app_subscriptionBtn_default, {}, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 81,
              columnNumber: 108
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(app_cancelBtn_default, {}, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 82,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 78,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexDirection: "column"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 101,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Autofill Form" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 102,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 97,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgXIcon, tone: "subdued" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 110,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem",
              color: "#BBB"
            }, children: "Form Customization" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 111,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 106,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgXIcon, tone: "subdued" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 120,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem",
              color: "#BBB"
            }, children: "Immediate Support" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 121,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 116,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgXIcon, tone: "subdued" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 130,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem",
              color: "#BBB"
            }, children: "Checkout Form" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 131,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 126,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 87,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "heading2xl", tone: "success", fontWeight: "regular", children: "Essential" }, void 0, false, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 145,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            marginTop: "10px"
          }, children: "Complete form customization for ultimate style and design." }, void 0, false, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 148,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center",
            marginTop: "20px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "heading3xl", fontWeight: "bold", children: "\u20AC-" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 158,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem",
              marginTop: "10px"
            }, children: "/month" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 161,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 153,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginTop: "15px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, children: "Coming Soon" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 169,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(app_cancelBtn_default, {}, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 172,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 166,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 144,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexDirection: "column"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 191,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Autofill Form" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 192,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 187,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 200,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Form Customization" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 201,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 196,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 209,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Immediate Support" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 210,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 205,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgXIcon, tone: "subdued" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 218,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem",
              color: "#BBB"
            }, children: "Checkout Form" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 219,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 214,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 179,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 177,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 143,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 142,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "heading2xl", tone: "success", fontWeight: "regular", children: "Premium" }, void 0, false, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 233,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            marginTop: "10px"
          }, children: "The form is integrated into both the Checkout and the shopping cart." }, void 0, false, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 236,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center",
            marginTop: "20px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "heading3xl", fontWeight: "bold", children: "\u20AC-" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 246,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem",
              marginTop: "10px"
            }, children: "/month" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 249,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 241,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            marginTop: "15px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, children: "Coming Soon" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 257,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(app_cancelBtn_default, {}, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 260,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 254,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 232,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          flexDirection: "column"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 279,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Autofill Form" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 280,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 275,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 288,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Form Customization" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 289,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 284,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 297,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Immediate Support" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 298,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 293,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            display: "flex",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { source: SvgCheckIcon, tone: "success" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 306,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
              marginLeft: "0.25rem"
            }, children: "Checkout Form" }, void 0, false, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 307,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 302,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 267,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 265,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 231,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 230,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { sectioned: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "heading2xl", as: "h4", fontWeight: "semibold", children: "FAQs" }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 320,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "What are the available subscription plans for your app?" }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 324,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "We offer three main subscription plans: Basic, Essential, and Premium Plan. Each plan is designed to cater to different needs, from simple autofill functionalities to comprehensive customization and integration options." }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 328,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "In the Basic Plan, I don't have support?" }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 330,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " With the Basic Plan, you're entitled to our standard support for any issues or queries. However, subscribers to the Premium and Essential Plans enjoy priority support, meaning their inquiries and issues are addressed with precedence, ensuring quicker response and resolution times. This priority access significantly enhances the support experience, providing faster assistance when needed." }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 334,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "What customization options are available with the Essential Plan for my form?" }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 335,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " With the Essential Plan, you're equipped with various customization options to enhance your form's appearance and functionality. You can add a background image or change the colors of the boxes and background to align with your brand's aesthetics. Additionally, you have the flexibility to modify the border style and border radius to suit your design preferences. Customizing the loader and removing the button are also possible, providing you with ample control over how the form looks and operates on your site." }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 339,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "Can I switch between subscription plans at any time?" }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 342,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Yes, you can switch between plans at any time directly from your admin dashboard. Upgrades are applied immediately, while downgrades will take effect at the start of the next billing cycle." }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 346,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "How does the Essential Plan differ from the Basic Plan?" }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 347,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The Essential Plan allows for some level of customization and includes autofill functionality, unlike the Basic Plan which offers simple autofill capabilities with no customization options." }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 351,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "p", variant: "headingMd", children: "What are the benefits of the Premium Plan over the Essential Plan?" }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 352,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The Premium Plan encompasses all the features of the Essential Plan, including essential autofill functionality and basic customization options. Additionally, it extends the autofill feature to the checkout stage, offering a comprehensive solution that enhances user experience by facilitating a smoother transaction process." }, void 0, false, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 356,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 319,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 318,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/app.billing.tsx",
        lineNumber: 317,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.billing.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      marginTop: "20px"
    } }, void 0, false, {
      fileName: "app/routes/app.billing.tsx",
      lineNumber: 364,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.billing.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(LayoutExample, "jGDpDPD8noc2zR5rYLLrCXQ11jg=", false, function() {
  return [useLoaderData];
});
_c = LayoutExample;
var _c;
$RefreshReg$(_c, "LayoutExample");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LayoutExample as default
};
//# sourceMappingURL=/build/routes/app.billing-UPV5PLMF.js.map
