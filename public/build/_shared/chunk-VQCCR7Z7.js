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

// app/routes/app.subscriptionBtn.tsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/app.subscriptionBtn.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.subscriptionBtn.tsx"
  );
  import.meta.hot.lastModified = "1707767900154.9504";
}
var SubscriptionBtn = (props) => {
  _s();
  const submit = useSubmit();
  const actionData = useActionData();
  console.log(actionData, "actionData");
  const startSub = () => submit({}, {
    replace: true,
    method: "POST"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { onSubmit: startSub, method: "post", action: "/app/subscriptionBtn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { fullWidth: true, submit: true, variant: "primary", tone: "success", onClick: startSub, children: "Choose Plan" }, void 0, false, {
    fileName: "app/routes/app.subscriptionBtn.tsx",
    lineNumber: 53,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/app.subscriptionBtn.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s(SubscriptionBtn, "Yxj8dhdFb1uLGQu12Rxh4tfD7Eo=", false, function() {
  return [useSubmit, useActionData];
});
_c = SubscriptionBtn;
var app_subscriptionBtn_default = SubscriptionBtn;
var _c;
$RefreshReg$(_c, "SubscriptionBtn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  app_subscriptionBtn_default
};
//# sourceMappingURL=/build/_shared/chunk-VQCCR7Z7.js.map
