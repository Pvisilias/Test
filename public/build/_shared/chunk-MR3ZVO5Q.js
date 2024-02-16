import {
  require_shopify
} from "/build/_shared/chunk-S6Y3EBRO.js";
import {
  Form,
  init_esm2 as init_esm,
  useActionData,
  useSubmit
} from "/build/_shared/chunk-UMY6WAKM.js";
import {
  Button,
  init_esm as init_esm2
} from "/build/_shared/chunk-UIAKPZRK.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-DKYKUFCK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.cancelBtn.tsx
init_remix_hmr();
init_esm();
init_esm2();
var import_shopify = __toESM(require_shopify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cancelBtn.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cancelBtn.tsx"
  );
  import.meta.hot.lastModified = "1707767899141.8267";
}
var CancelBtn = (props) => {
  _s();
  const submit = useSubmit();
  const actionData = useActionData();
  console.log(actionData, "actionData");
  const startSub = () => submit({}, {
    replace: true,
    method: "POST"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { onSubmit: startSub, method: "post", action: "/app/cancelBtn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    paddingTop: "10px "
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, submit: true, variant: "primary", onClick: startSub, children: "Cancel Subscription" }, void 0, false, {
    fileName: "app/routes/app.cancelBtn.tsx",
    lineNumber: 67,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/app.cancelBtn.tsx",
    lineNumber: 64,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.cancelBtn.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
};
_s(CancelBtn, "Yxj8dhdFb1uLGQu12Rxh4tfD7Eo=", false, function() {
  return [useSubmit, useActionData];
});
_c = CancelBtn;
var app_cancelBtn_default = CancelBtn;
var _c;
$RefreshReg$(_c, "CancelBtn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  app_cancelBtn_default
};
//# sourceMappingURL=/build/_shared/chunk-MR3ZVO5Q.js.map
