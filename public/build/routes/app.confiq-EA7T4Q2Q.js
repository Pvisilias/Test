import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  init_esm2 as init_esm,
  useLoaderData
} from "/build/_shared/chunk-UMY6WAKM.js";
import {
  EmptyState,
  LegacyCard,
  Page,
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

// app/routes/app.confiq.tsx
init_remix_hmr();
init_esm2();
var import_shopify = __toESM(require_shopify());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.confiq.tsx"
  );
  import.meta.hot.lastModified = "1707821096122.7512";
}
var confiq = (props) => {
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { title: "Custom Css", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegacyCard, { sectioned: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    EmptyState,
    {
      heading: "Craft Your Custom Form",
      secondaryAction: {
        content: "Learn more",
        onAction: () => {
          window.open("https://5minuteslogo.com/pages/apps", "_blank");
        }
      },
      image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Available soon only with Premium and Essential plans." }, void 0, false, {
        fileName: "app/routes/app.confiq.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/app.confiq.tsx",
      lineNumber: 54,
      columnNumber: 11
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/app.confiq.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.confiq.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this);
};
var app_confiq_default = confiq;
export {
  app_confiq_default as default
};
//# sourceMappingURL=/build/routes/app.confiq-EA7T4Q2Q.js.map
