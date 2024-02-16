var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_server2 = require("react-dom/server"), import_react = require("@remix-run/react"), import_node2 = require("@remix-run/node"), import_isbot = require("isbot");

// app/shopify.server.js
var import_node = require("@shopify/shopify-app-remix/adapters/node"), import_server = require("@shopify/shopify-app-remix/server"), import_shopify_app_session_storage_prisma = require("@shopify/shopify-app-session-storage-prisma"), import__ = require("@shopify/shopify-api/rest/admin/2024-01");

// app/db.server.js
var import_client = require("@prisma/client"), prisma = global.prisma || new import_client.PrismaClient();
global.prisma || (global.prisma = new import_client.PrismaClient());
var db_server_default = prisma;

// app/shopify.server.js
var MONTHLY_PLAN = "Monthly subscription", ANNUAL_PLAN = "Annual subscription", shopify = (0, import_server.shopifyApp)({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: import_server.LATEST_API_VERSION,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new import_shopify_app_session_storage_prisma.PrismaSessionStorage(db_server_default),
  distribution: import_server.AppDistribution.AppStore,
  restResources: import__.restResources,
  webhooks: {
    APP_UNINSTALLED: {
      deliveryMethod: import_server.DeliveryMethod.Http,
      callbackUrl: "/webhooks"
    }
  },
  hooks: {
    afterAuth: async ({ session }) => {
      shopify.registerWebhooks({ session });
    }
  },
  billing: {
    [MONTHLY_PLAN]: {
      amount: 10,
      currencyCode: "EUR",
      interval: import_server.BillingInterval.Every30Days
    },
    [ANNUAL_PLAN]: {
      amount: 50,
      currencyCode: "EUR",
      interval: import_server.BillingInterval.Annual
    }
  },
  future: {
    v3_webhookAdminContext: !0,
    v3_authenticatePublic: !0,
    unstable_newEmbeddedAuthStrategy: !0
  },
  ...process.env.SHOP_CUSTOM_DOMAIN ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] } : {}
});
var addDocumentResponseHeaders = shopify.addDocumentResponseHeaders, authenticate = shopify.authenticate, unauthenticated = shopify.unauthenticated, login = shopify.login, registerWebhooks = shopify.registerWebhooks, sessionStorage = shopify.sessionStorage;

// app/entry.server.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  addDocumentResponseHeaders(request, responseHeaders);
  let userAgent = request.headers.get("user-agent"), callbackName = (0, import_isbot.isbot)(userAgent ?? "") ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server2.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 22,
          columnNumber: 7
        },
        this
      ),
      {
        [callbackName]: () => {
          let body = new import_stream.PassThrough(), stream = (0, import_node2.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://cdn.shopify.com/" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/app.subscriptionBtn.tsx
var app_subscriptionBtn_exports = {};
__export(app_subscriptionBtn_exports, {
  action: () => action,
  default: () => app_subscriptionBtn_default
});
var import_react3 = require("@remix-run/react"), import_polaris = require("@shopify/polaris");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  console.log("hitt");
  let { billing } = await authenticate.admin(request);
  return await billing.require({
    plans: [MONTHLY_PLAN],
    isTest: !0,
    onFailure: async () => billing.request({
      plan: MONTHLY_PLAN,
      isTest: !0
    })
  }), null;
}, SubscriptionBtn = (props) => {
  let submit = (0, import_react3.useSubmit)(), actionData = (0, import_react3.useActionData)();
  console.log(actionData, "actionData");
  let startSub = () => submit({}, { replace: !0, method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, { onSubmit: startSub, method: "post", action: "/app/subscriptionBtn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_polaris.Button, { fullWidth: !0, submit: !0, variant: "primary", tone: "success", onClick: startSub, children: "Choose Plan" }, void 0, !1, {
    fileName: "app/routes/app.subscriptionBtn.tsx",
    lineNumber: 35,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.subscriptionBtn.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
}, app_subscriptionBtn_default = SubscriptionBtn;

// app/routes/app.cancelBtn.tsx
var app_cancelBtn_exports = {};
__export(app_cancelBtn_exports, {
  action: () => action2,
  default: () => app_cancelBtn_default
});
var import_react4 = require("@remix-run/react"), import_polaris2 = require("@shopify/polaris");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), action2 = async ({ request }) => {
  console.log("hitt");
  let { billing } = await authenticate.admin(request), subscription = (await billing.require({
    plans: [MONTHLY_PLAN],
    isTest: !0,
    onFailure: async () => billing.request({
      plan: MONTHLY_PLAN,
      isTest: !0
    })
  })).appSubscriptions[0], canceledsusbscription = await billing.cancel({
    subscriptionId: subscription.id,
    isTest: !0,
    prorate: !0
  });
  return console.log("canceledsusbscription", canceledsusbscription), canceledsusbscription ? (console.log("Unsubscribed"), canceledsusbscription) : null;
}, CancelBtn = (props) => {
  let submit = (0, import_react4.useSubmit)(), actionData = (0, import_react4.useActionData)();
  console.log(actionData, "actionData");
  let startSub = () => submit({}, { replace: !0, method: "POST" });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { onSubmit: startSub, method: "post", action: "/app/cancelBtn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { paddingTop: "10px " }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_polaris2.Button, { fullWidth: !0, submit: !0, variant: "primary", onClick: startSub, children: "Cancel Subscription" }, void 0, !1, {
    fileName: "app/routes/app.cancelBtn.tsx",
    lineNumber: 51,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.cancelBtn.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.cancelBtn.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this);
}, app_cancelBtn_default = CancelBtn;

// app/routes/app.billing.tsx
var app_billing_exports = {};
__export(app_billing_exports, {
  default: () => LayoutExample,
  loader: () => loader
});
var import_polaris3 = require("@shopify/polaris"), import_polaris_icons = require("@shopify/polaris-icons");
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader = async ({ request }) => {
  let { billing } = await authenticate.admin(request), { hasActivePayment } = await billing.check({
    plans: [MONTHLY_PLAN],
    isTest: !0
  });
  return { isSubscribed: hasActivePayment };
};
function LayoutExample() {
  let { isSubscribed } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_polaris3.Page,
    {
      title: "Plans",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard.Section, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "heading2xl", tone: "success", fontWeight: "regular", children: "BASIC" }, void 0, !1, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 55,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginTop: "10px" }, children: "Automated form filling without customization options." }, void 0, !1, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 58,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center", marginTop: "20px" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "heading3xl", fontWeight: "bold", children: "\u20AC10" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 62,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem", marginTop: "10px" }, children: "/month" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 65,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 61,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginTop: "15px" }, children: [
                isSubscribed ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { fullWidth: !0, pressed: !0, disabled: !0, children: "Current Plan" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 69,
                  columnNumber: 37
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(app_subscriptionBtn_default, {}, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 71,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(app_cancelBtn_default, {}, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 73,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 67,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 54,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 84,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Autofill Form" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 85,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 83,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.XIcon, tone: "subdued" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 88,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem", color: "#BBB" }, children: "Form Customization" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 89,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 87,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.XIcon, tone: "subdued" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 92,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem", color: "#BBB" }, children: "Immediate Support" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 93,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 91,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.XIcon, tone: "subdued" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 96,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem", color: "#BBB" }, children: "Checkout Form" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 97,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 95,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 80,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 78,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 53,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard.Section, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "heading2xl", tone: "success", fontWeight: "regular", children: "Essential" }, void 0, !1, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 108,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginTop: "10px" }, children: "Complete form customization for ultimate style and design." }, void 0, !1, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 111,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center", marginTop: "20px" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "heading3xl", fontWeight: "bold", children: "\u20AC-" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 115,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem", marginTop: "10px" }, children: "/month" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 118,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 114,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginTop: "15px" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { fullWidth: !0, children: "Coming Soon" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 121,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(app_cancelBtn_default, {}, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 124,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 120,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 107,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 135,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Autofill Form" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 136,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 134,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 139,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Form Customization" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 140,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 138,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 143,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Immediate Support" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 144,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 142,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.XIcon, tone: "subdued" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 147,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem", color: "#BBB" }, children: "Checkout Form" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 148,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 146,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 131,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 129,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 106,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { variant: "oneThird", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard.Section, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "heading2xl", tone: "success", fontWeight: "regular", children: "Premium" }, void 0, !1, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 159,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginTop: "10px" }, children: "The form is integrated into both the Checkout and the shopping cart." }, void 0, !1, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 162,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center", marginTop: "20px" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "heading3xl", fontWeight: "bold", children: "\u20AC-" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 166,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem", marginTop: "10px" }, children: "/month" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 169,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 165,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginTop: "15px" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Button, { fullWidth: !0, children: "Coming Soon" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 172,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(app_cancelBtn_default, {}, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 175,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 171,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 158,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", flexWrap: "wrap", alignItems: "flex-start", flexDirection: "column" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 186,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Autofill Form" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 187,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 185,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 190,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Form Customization" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 191,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 189,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 194,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Immediate Support" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 195,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 193,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { display: "flex", alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Icon, { source: import_polaris_icons.CheckIcon, tone: "success" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 198,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { style: { marginLeft: "0.25rem" }, children: "Checkout Form" }, void 0, !1, {
                  fileName: "app/routes/app.billing.tsx",
                  lineNumber: 199,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/app.billing.tsx",
                lineNumber: 197,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 182,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 180,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 157,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 156,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.BlockStack, { gap: "400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { variant: "heading2xl", as: "h4", fontWeight: "semibold", children: "FAQs" }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 210,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "headingMd", children: "What are the available subscription plans for your app?" }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 214,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We offer three main subscription plans: Basic, Essential, and Premium Plan. Each plan is designed to cater to different needs, from simple autofill functionalities to comprehensive customization and integration options." }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 218,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "headingMd", children: "In the Basic Plan, I don't have support?" }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 220,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: " With the Basic Plan, you're entitled to our standard support for any issues or queries. However, subscribers to the Premium and Essential Plans enjoy priority support, meaning their inquiries and issues are addressed with precedence, ensuring quicker response and resolution times. This priority access significantly enhances the support experience, providing faster assistance when needed." }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 224,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "headingMd", children: "What customization options are available with the Essential Plan for my form?" }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 225,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: " With the Essential Plan, you're equipped with various customization options to enhance your form's appearance and functionality. You can add a background image or change the colors of the boxes and background to align with your brand's aesthetics. Additionally, you have the flexibility to modify the border style and border radius to suit your design preferences. Customizing the loader and removing the button are also possible, providing you with ample control over how the form looks and operates on your site." }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 229,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "headingMd", children: "Can I switch between subscription plans at any time?" }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 232,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Yes, you can switch between plans at any time directly from your admin dashboard. Upgrades are applied immediately, while downgrades will take effect at the start of the next billing cycle." }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 236,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "headingMd", children: "How does the Essential Plan differ from the Basic Plan?" }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 237,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Essential Plan allows for some level of customization and includes autofill functionality, unlike the Basic Plan which offers simple autofill capabilities with no customization options." }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 241,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_polaris3.Text, { as: "p", variant: "headingMd", children: "What are the benefits of the Premium Plan over the Essential Plan?" }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 242,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "The Premium Plan encompasses all the features of the Essential Plan, including essential autofill functionality and basic customization options. Additionally, it extends the autofill feature to the checkout stage, offering a comprehensive solution that enhances user experience by facilitating a smoother transaction process." }, void 0, !1, {
              fileName: "app/routes/app.billing.tsx",
              lineNumber: 246,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 209,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 208,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/app.billing.tsx",
            lineNumber: 207,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginTop: "20px" } }, void 0, !1, {
          fileName: "app/routes/app.billing.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/app.billing.tsx",
      lineNumber: 49,
      columnNumber: 9
    },
    this
  );
}

// app/routes/app.support.tsx
var app_support_exports = {};
__export(app_support_exports, {
  default: () => Support
});
var import_polaris4 = require("@shopify/polaris"), import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Support() {
  let [open, setOpen] = (0, import_react6.useState)(null), handleToggle = (0, import_react6.useCallback)((id) => {
    setOpen((currentOpen) => currentOpen === id ? null : id);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Page, { title: "What's New", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris4.MediaCard,
      {
        title: "Report a Problem",
        primaryAction: {
          content: "Contact Us",
          onAction: () => {
            window.open("https://5minuteslogo.com/pages/contact", "_blank");
          }
        },
        description: "Encountered an issue? Let us know how we can help. Your feedback is crucial for improving your experience.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Contact.png?v=1707508806"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 51,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 40,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_polaris4.MediaCard,
      {
        title: "Share Your Insights",
        primaryAction: {
          content: "Share Your Ideas",
          onAction: () => {
            window.open("https://5minuteslogo.com/pages/contact", "_blank");
          }
        },
        description: "We love hearing from our users! Share your innovative ideas or suggestions on how we can make our app even better.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/feedback2.png?v=1707508764"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 73,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 62,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { height: "100%", marginTop: "18px", marginBottom: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyCard, { sectioned: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", marginTop: "0.5rem", marginBottom: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.Text, { as: "p", variant: "headingLg", children: "FAQ" }, void 0, !1, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 88,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyStack, { vertical: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { borderTop: "0.0625rem solid #dde0e4", paddingBlockStart: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Button,
          {
            fullWidth: !0,
            disclosure: !0,
            variant: "tertiary",
            onClick: () => handleToggle("collapsible1"),
            ariaExpanded: open === "collapsible1",
            ariaControls: "collapsible1",
            textAlign: "start",
            children: "Does the app work with drawer type carts?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 92,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 91,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Collapsible,
          {
            open: open === "collapsible1",
            id: "collapsible1",
            transition: { duration: "200ms", timingFunction: "ease-in-out" },
            expandOnPrint: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", paddingBottom: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: " Currently, our app is optimized for page type carts and does not support drawer type carts. We are actively working on expanding our compatibility to include drawer type carts, aiming to offer this functionality in the near future." }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 113,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 112,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 111,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 104,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 90,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyStack, { vertical: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { borderTop: "0.0625rem solid #dde0e4", paddingBlockStart: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Button,
          {
            fullWidth: !0,
            disclosure: !0,
            variant: "tertiary",
            onClick: () => handleToggle("collapsible2"),
            ariaExpanded: open === "collapsible2",
            ariaControls: "collapsible2",
            textAlign: "start",
            children: "What should I do if the form isn't working properly?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 123,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 122,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Collapsible,
          {
            open: open === "collapsible2",
            id: "collapsible2",
            transition: { duration: "200ms", timingFunction: "ease-in-out" },
            expandOnPrint: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", paddingBottom: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: `If you encounter any issues with the form, please first ensure that your cart type is set to page, as our app currently supports only this format. If the problem persists, don't hesitate to report the issue through our "Report a Problem" section in the support page. Provide as much detail as possible to help us resolve your issue swiftly.` }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 143,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 142,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 141,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 135,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 121,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyStack, { vertical: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { borderTop: "0.0625rem solid #dde0e4", paddingBlockStart: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Button,
          {
            fullWidth: !0,
            disclosure: !0,
            variant: "tertiary",
            onClick: () => handleToggle("collapsible3"),
            ariaExpanded: open === "collapsible3",
            ariaControls: "collapsible3",
            textAlign: "start",
            children: "Can I use the app on multiple stores with one subscription?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 151,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 150,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Collapsible,
          {
            open: open === "collapsible3",
            id: "collapsible3",
            transition: { duration: "200ms", timingFunction: "ease-in-out" },
            expandOnPrint: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", paddingBottom: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Each subscription is valid for a single Shopify store. If you wish to use our app across multiple stores, you'll need to subscribe separately for each store to ensure proper functionality and support." }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 171,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 170,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 169,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 163,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 149,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyStack, { vertical: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { borderTop: "0.0625rem solid #dde0e4", paddingBlockStart: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Button,
          {
            fullWidth: !0,
            disclosure: !0,
            variant: "tertiary",
            onClick: () => handleToggle("collapsible4"),
            ariaExpanded: open === "collapsible4",
            ariaControls: "collapsible4",
            textAlign: "start",
            children: "Is there a user manual or guide for the app?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 179,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 178,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Collapsible,
          {
            open: open === "collapsible4",
            id: "collapsible4",
            transition: { duration: "200ms", timingFunction: "ease-in-out" },
            expandOnPrint: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", paddingBottom: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: 'Yes, we provide a comprehensive user guide that covers all aspects of setting up and using the app effectively. You can find this guide in the "Guied" section of our app or on our support page. If you have any further questions, our support team is always ready to assist you.' }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 199,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 198,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 197,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 191,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 177,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyStack, { vertical: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { borderTop: "0.0625rem solid #dde0e4", paddingBlockStart: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Button,
          {
            fullWidth: !0,
            disclosure: !0,
            variant: "tertiary",
            onClick: () => handleToggle("collapsible5"),
            ariaExpanded: open === "collapsible5",
            ariaControls: "collapsible5",
            textAlign: "start",
            children: "Does the AFM Filler work with all Shopify themes?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 207,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 206,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Collapsible,
          {
            open: open === "collapsible5",
            id: "collapsible5",
            transition: { duration: "200ms", timingFunction: "ease-in-out" },
            expandOnPrint: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", paddingBottom: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Yes, the AFM Filler is designed to be compatible with all official Shopify themes. We've worked diligently to ensure seamless integration across a wide range of designs and layouts. " }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 227,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 226,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 225,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 219,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 205,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyStack, { vertical: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { borderTop: "0.0625rem solid #dde0e4", paddingBlockStart: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Button,
          {
            fullWidth: !0,
            disclosure: !0,
            variant: "tertiary",
            onClick: () => handleToggle("collapsible6"),
            ariaExpanded: open === "collapsible6",
            ariaControls: "collapsible6",
            textAlign: "start",
            children: "How can I share my ideas or suggestions for the app?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 235,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 234,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Collapsible,
          {
            open: open === "collapsible6",
            id: "collapsible6",
            transition: { duration: "200ms", timingFunction: "ease-in-out" },
            expandOnPrint: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", paddingBottom: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: `We value your feedback and ideas! If you have suggestions on how we can improve or new features you'd like to see, please share them with us through the "Share Your Insights" section in our support page. Your input is crucial for our continuous improvement.` }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 255,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 254,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 253,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 247,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 233,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.LegacyStack, { vertical: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { borderTop: "0.0625rem solid #dde0e4", paddingBlockStart: "15px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Button,
          {
            fullWidth: !0,
            disclosure: !0,
            variant: "tertiary",
            onClick: () => handleToggle("collapsible7"),
            ariaExpanded: open === "collapsible7",
            ariaControls: "collapsible7",
            textAlign: "start",
            children: "Do you have any questions?"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 263,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/app.support.tsx",
          lineNumber: 262,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          import_polaris4.Collapsible,
          {
            open: open === "collapsible7",
            id: "collapsible7",
            transition: { duration: "200ms", timingFunction: "ease-in-out" },
            expandOnPrint: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_polaris4.TextContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { style: { paddingLeft: "0.75rem", paddingBottom: "0.75rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "If you have any further questions or need assistance with anything not covered in our FAQs, please don't hesitate to reach out. Our support team is here to help you with any inquiries, technical issues, or feedback you may have. Contact us through the support page, and we'll make sure to address your needs promptly." }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 284,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 283,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/app.support.tsx",
              lineNumber: 282,
              columnNumber: 29
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.support.tsx",
            lineNumber: 276,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/app.support.tsx",
        lineNumber: 261,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 86,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.support.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.support.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

// app/routes/app._index.tsx
var app_index_exports = {};
__export(app_index_exports, {
  action: () => action3,
  default: () => Index,
  loader: () => loader2
});
var import_react7 = require("react"), import_polaris5 = require("@shopify/polaris");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => (await authenticate.admin(request), null), action3 = async ({ request }) => {
  let { admin } = await authenticate.admin(request), color = ["Red", "Orange", "Yellow", "Green"][Math.floor(Math.random() * 4)];
};
function Index() {
  let [showBanner, setShowBanner] = (0, import_react7.useState)(!0), handleVideoClick2 = () => {
    window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Page, { title: "DashBoard", primaryAction: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Button, { url: "/app/support", variant: "primary", children: "Support" }, void 0, !1, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 49,
    columnNumber: 44
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_polaris5.Banner,
        {
          title: "Cart Type Compatibility",
          tone: "critical",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Our app currently supports only 'page type' carts. Ensure your cart settings are correctly configured to avoid any disruptions in service. We're working to expand compatibility and appreciate your understanding." }, void 0, !1, {
            fileName: "app/routes/app._index.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      ),
      showBanner && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Banner, { title: "Coming Soon: Checkout Form", onDismiss: () => setShowBanner(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "New update ahead! We're close to launching our Checkout Form feature and Annual Plans, elevating your and your customers' experience. Stay tuned." }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_polaris5.MediaCard,
        {
          title: "Installation Guide",
          primaryAction: {
            content: "Learn more",
            url: "/app/guide"
          },
          description: "Check out our quick tutorial on how to seamlessly integrate AFM Filler into your Shopify store.",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "img",
            {
              alt: "",
              width: "100%",
              height: "100%",
              style: {
                objectFit: "cover",
                objectPosition: "center"
              },
              src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/How_Works.png?v=1707650074"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app._index.tsx",
              lineNumber: 77,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.LegacyCard, { sectioned: !0, title: "Customise Your Form", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { style: { marginBottom: "15px" }, children: " Unlock the full potential of your forms. Tailor them to match your brand and meet your needs." }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Button, { url: "/app/confiq", children: "Start Customizing" }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_polaris5.MediaCard,
        {
          title: "See AFM Filler in Action",
          primaryAction: {
            content: "Watch Video",
            onAction: () => {
              window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank");
            }
          },
          description: "Watch our detailed video guide to understand exactly how AFM Filler streamlines your workflow and improves customer experience on your Shopify store.",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_polaris5.VideoThumbnail,
            {
              videoLength: 80,
              thumbnailUrl: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/How_Works2.png?v=1707650640",
              onClick: handleVideoClick2
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app._index.tsx",
              lineNumber: 103,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 92,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Layout.Section, { variant: "oneThird", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.LegacyCard, { title: "Feedback", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Your insights drive our improvements. Share your thoughts and help shape the future of AFM Filler." }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Button, { onClick: () => window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank"), children: "Give Feedback" }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.LegacyCard, { title: "What's Next", subdued: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Stay ahead with our upcoming features and updates designed to enhance your Shopify experience." }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.LegacyCard.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_polaris5.Button, { onClick: () => window.open("https://5minuteslogo.com/pages/apps#section-template--21990251495765__custom_liquid_eErFET-padding", "_blank"), children: "See What's Coming" }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/app._index.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app._index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app._index.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/app._index.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/app.confiq.tsx
var app_confiq_exports = {};
__export(app_confiq_exports, {
  default: () => app_confiq_default,
  loader: () => loader3
});
var import_polaris6 = require("@shopify/polaris");
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  console.log("hitt");
  let { billing } = await authenticate.admin(request);
  return await billing.require({
    plans: [MONTHLY_PLAN],
    isTest: !0,
    onFailure: async () => billing.request({
      plan: MONTHLY_PLAN,
      isTest: !0
    })
  }), null;
}, confiq = (props) => {
  let data = (0, import_react8.useLoaderData)();
  return console.log(data), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.Page, { title: "Custom Css", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_polaris6.LegacyCard, { sectioned: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_polaris6.EmptyState,
    {
      heading: "Craft Your Custom Form",
      secondaryAction: {
        content: "Learn more",
        onAction: () => {
          window.open("https://5minuteslogo.com/pages/apps", "_blank");
        }
      },
      image: "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Available soon only with Premium and Essential plans." }, void 0, !1, {
        fileName: "app/routes/app.confiq.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/app.confiq.tsx",
      lineNumber: 43,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/app.confiq.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/app.confiq.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this);
}, app_confiq_default = confiq;

// app/routes/auth.login/route.jsx
var route_exports = {};
__export(route_exports, {
  action: () => action4,
  default: () => Auth,
  links: () => links,
  loader: () => loader4
});
var import_react9 = require("react"), import_node3 = require("@remix-run/node"), import_polaris7 = require("@shopify/polaris"), import_react10 = require("@remix-run/react");

// node_modules/@shopify/polaris/build/esm/styles.css
var styles_default = "/build/_assets/styles-A4CRFWO4.css";

// app/routes/auth.login/error.server.jsx
var import_server3 = require("@shopify/shopify-app-remix/server");
function loginErrorMessage(loginErrors) {
  return loginErrors?.shop === import_server3.LoginErrorType.MissingShop ? { shop: "Please enter your shop domain to log in" } : loginErrors?.shop === import_server3.LoginErrorType.InvalidShop ? { shop: "Please enter a valid shop domain to log in" } : {};
}

// app/routes/auth.login/route.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], loader4 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node3.json)({
    errors,
    polarisTranslations: require("@shopify/polaris/locales/en.json")
  });
}, action4 = async ({ request }) => {
  let errors = loginErrorMessage(await login(request));
  return (0, import_node3.json)({
    errors
  });
};
function Auth() {
  let loaderData = (0, import_react10.useLoaderData)(), actionData = (0, import_react10.useActionData)(), [shop, setShop] = (0, import_react9.useState)(""), { errors } = actionData || loaderData;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.AppProvider, { i18n: loaderData.polarisTranslations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.FormLayout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Text, { variant: "headingMd", as: "h2", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 48,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      import_polaris7.TextField,
      {
        type: "text",
        name: "shop",
        label: "Shop domain",
        helpText: "example.myshopify.com",
        value: shop,
        onChange: setShop,
        autoComplete: "on",
        error: errors.shop
      },
      void 0,
      !1,
      {
        fileName: "app/routes/auth.login/route.jsx",
        lineNumber: 51,
        columnNumber: 15
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_polaris7.Button, { submit: !0, children: "Log in" }, void 0, !1, {
      fileName: "app/routes/auth.login/route.jsx",
      lineNumber: 61,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.login/route.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/app.guide.tsx
var app_guide_exports = {};
__export(app_guide_exports, {
  default: () => Guide
});
var import_polaris8 = require("@shopify/polaris"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Guide() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_polaris8.Page, { title: "3 Installation Steps", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.MediaCard,
      {
        portrait: !0,
        title: "Step 1: Customize Theme",
        description: "Begin by navigating to your Shopify Admin panel. Go to 'Online Store' and then select 'Themes'. Find your current theme and click on 'Customize'. This will take you to the theme editor where you can modify your store.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Step1.png"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.guide.tsx",
            lineNumber: 38,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.guide.tsx",
        lineNumber: 31,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.MediaCard,
      {
        portrait: !0,
        title: "Step 2: Cart Configuration",
        description: "Once in the theme editor, look to the left side of the page for a menu. Click on 'Settings' and scroll down to find the 'Cart' section. Here, you must change your cart type to 'Page' if it isn't already set to this. Currently, our app operates optimally with the 'page type' cart.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Step2.png"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.guide.tsx",
            lineNumber: 56,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.guide.tsx",
        lineNumber: 49,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.MediaCard,
      {
        portrait: !0,
        title: "Step 3: App Activation",
        description: "After adjusting your cart settings, navigate to the 'Apps Embeds' section. Here, you will find the option to 'Activate' our app.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Step3.png"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.guide.tsx",
            lineNumber: 74,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.guide.tsx",
        lineNumber: 67,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      import_polaris8.MediaCard,
      {
        portrait: !0,
        title: "Installation Complete",
        description: "Congratulations! You've successfully completed the installation process. Your online store is now equipped with our app, ready to enhance your and your customers' experience.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Done.png"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.guide.tsx",
            lineNumber: 92,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.guide.tsx",
        lineNumber: 85,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { marginTop: "20px" } }, void 0, !1, {
      fileName: "app/routes/app.guide.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.guide.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

// app/routes/webhooks.jsx
var webhooks_exports = {};
__export(webhooks_exports, {
  action: () => action5
});
var action5 = async ({ request }) => {
  let { topic, shop, session, admin, payload } = await authenticate.webhook(request);
  if (!admin)
    throw new Response();
  switch (topic) {
    case "APP_UNINSTALLED":
      session && await db_server_default.session.deleteMany({ where: { shop } });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }
  throw new Response();
};

// app/routes/app.new.tsx
var app_new_exports = {};
__export(app_new_exports, {
  default: () => New
});
var import_polaris9 = require("@shopify/polaris"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function New() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_polaris9.Page, { title: "What's New", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_polaris9.MediaCard,
      {
        title: "Upcoming: Essential Plan",
        primaryAction: {
          content: "Learn More",
          onAction: () => {
            window.open("https://5minuteslogo.com/pages/apps", "_blank");
          }
        },
        description: "Unlock the power to customize your form to align perfectly with your brand. Tailor-made for seamless integration, the Essential Plan is your next step towards a personalized shopping experience.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Form1.png?v=1707508765"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.new.tsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.new.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_polaris9.MediaCard,
      {
        title: "Current Form Compatibility",
        primaryAction: {
          content: "View Details",
          onAction: () => {
            window.open("https://5minuteslogo.com/pages/apps", "_blank");
          }
        },
        description: "For now, our app operates flawlessly with page type carts, enhancing your store's efficiency. We're diligently working to extend compatibility to drawer carts, broadening your possibilities.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Cart1.png?v=1707508765"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.new.tsx",
            lineNumber: 64,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.new.tsx",
        lineNumber: 53,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_polaris9.MediaCard,
      {
        title: "Premium Plan: Coming Soon",
        primaryAction: {
          content: "Get Notified",
          onAction: () => {
            window.open("https://5minuteslogo.com/pages/apps", "_blank");
          }
        },
        description: "Anticipate the launch of our Premium Plan, designed to integrate the form directly into the checkout process. Elevate the user experience by ensuring a smooth and swift checkout for every customer.",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          "img",
          {
            alt: "",
            width: "100%",
            height: "100%",
            style: {
              objectFit: "cover",
              objectPosition: "center"
            },
            src: "https://cdn.shopify.com/s/files/1/0646/9753/2585/files/Form.png?v=1707508764"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.new.tsx",
            lineNumber: 87,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.new.tsx",
        lineNumber: 75,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/app.new.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this);
}

// app/routes/_index/route.jsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => App2,
  links: () => links2,
  loader: () => loader5
});
var import_node4 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/routes/_index/style.css
var style_default = "/build/_assets/style-M2E3MJNO.css";

// app/routes/_index/route.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: style_default }], loader5 = async ({ request }) => {
  let url = new URL(request.url);
  if (url.searchParams.get("shop"))
    throw (0, import_node4.redirect)(`/app?${url.searchParams.toString()}`);
  return (0, import_node4.json)({ showForm: Boolean(login) });
};
function App2() {
  let { showForm } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "A short heading about [your app]" }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "A tagline about [your app] that describes your value proposition." }, void 0, !1, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    showForm && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react11.Form, { method: "post", action: "/auth/login", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "Shop domain" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "text", name: "shop" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { children: "e.g: my-shop-domain.myshopify.com" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { type: "submit", children: "Log in" }, void 0, !1, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 33,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("strong", { children: "Product feature" }, void 0, !1, {
          fileName: "app/routes/_index/route.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        ". Some detail about your feature and its benefit to your customer."
      ] }, void 0, !0, {
        fileName: "app/routes/_index/route.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index/route.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index/route.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/auth.$.jsx
var auth_exports = {};
__export(auth_exports, {
  loader: () => loader6
});
var loader6 = async ({ request }) => (await authenticate.admin(request), null);

// app/routes/app.jsx
var app_exports = {};
__export(app_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App3,
  headers: () => headers,
  links: () => links3,
  loader: () => loader7
});
var import_node5 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_server4 = require("@shopify/shopify-app-remix/server"), import_react13 = require("@shopify/shopify-app-remix/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: styles_default }], loader7 = async ({ request }) => (await authenticate.admin(request), (0, import_node5.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App3() {
  let { apiKey } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react13.AppProvider, { isEmbeddedApp: !0, apiKey, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("ui-nav-menu", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: "/app", rel: "home", children: "Home" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: "/app/confiq", children: "Configurations" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: "/app/new", children: "What's New" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: "/app/billing", children: "Plans" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: "/app/guide", children: "Guide" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Link, { to: "/app/support", children: "Support" }, void 0, !1, {
        fileName: "app/routes/app.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
      fileName: "app/routes/app.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react12.useRouteError)();
  return import_server4.boundary.error(error);
}
var headers = (headersArgs) => import_server4.boundary.headers(headersArgs);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OZX4POWY.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-UMY6WAKM.js", "/build/_shared/chunk-DKYKUFCK.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-I4EUFII3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-R7UL67RX.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-6OQNU2PL.js", imports: ["/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-ODDTLQ4E.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-SU66BP3D.js", "/build/_shared/chunk-UIAKPZRK.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/app._index": { id: "routes/app._index", parentId: "routes/app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/app._index-MUFTDUQT.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.billing": { id: "routes/app.billing", parentId: "routes/app", path: "billing", index: void 0, caseSensitive: void 0, module: "/build/routes/app.billing-UPV5PLMF.js", imports: ["/build/_shared/chunk-VQCCR7Z7.js", "/build/_shared/chunk-MR3ZVO5Q.js", "/build/_shared/chunk-S6Y3EBRO.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.cancelBtn": { id: "routes/app.cancelBtn", parentId: "routes/app", path: "cancelBtn", index: void 0, caseSensitive: void 0, module: "/build/routes/app.cancelBtn-Q4SG5BYE.js", imports: ["/build/_shared/chunk-MR3ZVO5Q.js", "/build/_shared/chunk-S6Y3EBRO.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.confiq": { id: "routes/app.confiq", parentId: "routes/app", path: "confiq", index: void 0, caseSensitive: void 0, module: "/build/routes/app.confiq-EA7T4Q2Q.js", imports: ["/build/_shared/chunk-S6Y3EBRO.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.guide": { id: "routes/app.guide", parentId: "routes/app", path: "guide", index: void 0, caseSensitive: void 0, module: "/build/routes/app.guide-AZNVXG3B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.new": { id: "routes/app.new", parentId: "routes/app", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/app.new-A47TYDXG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.subscriptionBtn": { id: "routes/app.subscriptionBtn", parentId: "routes/app", path: "subscriptionBtn", index: void 0, caseSensitive: void 0, module: "/build/routes/app.subscriptionBtn-AMLD2VVH.js", imports: ["/build/_shared/chunk-VQCCR7Z7.js", "/build/_shared/chunk-S6Y3EBRO.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app.support": { id: "routes/app.support", parentId: "routes/app", path: "support", index: void 0, caseSensitive: void 0, module: "/build/routes/app.support-6LSBBIML.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.$": { id: "routes/auth.$", parentId: "root", path: "auth/*", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.$-4B5WQABX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth.login": { id: "routes/auth.login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth.login-E7FVPACR.js", imports: ["/build/_shared/chunk-3GJP5LZF.js", "/build/_shared/chunk-ODDTLQ4E.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-UIAKPZRK.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/webhooks": { id: "routes/webhooks", parentId: "root", path: "webhooks", index: void 0, caseSensitive: void 0, module: "/build/routes/webhooks-JFV2P4HI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "df0908f1", hmr: { runtime: "/build/_shared/chunk-DKYKUFCK.js", timestamp: 1707829913389 }, url: "/build/manifest-DF0908F1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/app.subscriptionBtn": {
    id: "routes/app.subscriptionBtn",
    parentId: "routes/app",
    path: "subscriptionBtn",
    index: void 0,
    caseSensitive: void 0,
    module: app_subscriptionBtn_exports
  },
  "routes/app.cancelBtn": {
    id: "routes/app.cancelBtn",
    parentId: "routes/app",
    path: "cancelBtn",
    index: void 0,
    caseSensitive: void 0,
    module: app_cancelBtn_exports
  },
  "routes/app.billing": {
    id: "routes/app.billing",
    parentId: "routes/app",
    path: "billing",
    index: void 0,
    caseSensitive: void 0,
    module: app_billing_exports
  },
  "routes/app.support": {
    id: "routes/app.support",
    parentId: "routes/app",
    path: "support",
    index: void 0,
    caseSensitive: void 0,
    module: app_support_exports
  },
  "routes/app._index": {
    id: "routes/app._index",
    parentId: "routes/app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_index_exports
  },
  "routes/app.confiq": {
    id: "routes/app.confiq",
    parentId: "routes/app",
    path: "confiq",
    index: void 0,
    caseSensitive: void 0,
    module: app_confiq_exports
  },
  "routes/auth.login": {
    id: "routes/auth.login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/app.guide": {
    id: "routes/app.guide",
    parentId: "routes/app",
    path: "guide",
    index: void 0,
    caseSensitive: void 0,
    module: app_guide_exports
  },
  "routes/webhooks": {
    id: "routes/webhooks",
    parentId: "root",
    path: "webhooks",
    index: void 0,
    caseSensitive: void 0,
    module: webhooks_exports
  },
  "routes/app.new": {
    id: "routes/app.new",
    parentId: "routes/app",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: app_new_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/auth.$": {
    id: "routes/auth.$",
    parentId: "root",
    path: "auth/*",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
