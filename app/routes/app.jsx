import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate, MONTHLY_PLAN } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  console.log('hitt')
  const { billing } = await authenticate.admin(request)

  await billing.require({
    plans: [MONTHLY_PLAN],
    isTest: true,
    onFailure: async () => billing.request({
      plan: MONTHLY_PLAN,
      isTest: true
    })
  })

  // Assuming you want to proceed if the subscription check passes
  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};


export default function App() {
  const { apiKey } = useLoaderData(); // Removed the generic type parameter

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <ui-nav-menu>
        <Link to="/app" rel="home"></Link>
        <Link to="/app/new">Νέα</Link>
        <Link to="/app/guide">Οδηγός</Link>
        <Link to="/app/support">Υποστήριξη</Link>
      </ui-nav-menu>
      <Outlet />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  const error = useRouteError(); // Adjusted for JSX context
  return boundary.error(error);
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
