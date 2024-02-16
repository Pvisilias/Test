import { json } from '@remix-run/node';
import { authenticate } from "../shopify.server";
import db from "../db.server";
import { handleCustomersDataRequest, handleCustomersRedact, handleShopRedact } from './gdprHandlers';



export const loader = () => {
  return new Response("This endpoint is for webhooks only and expects POST requests.", {
    status: 405,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

export const action = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { topic, shop, payload } = await authenticate.webhook(request);

  try {
    switch (topic) {
      case "APP_UNINSTALLED":
        // Handle app uninstallation logic
        if (shop) {
          await db.session.deleteMany({ where: { shop } });
        }
        return json({ success: true });

        case "CUSTOMERS_DATA_REQUEST":
          // Logic to collect and send customer data
          if (shop && payload.customer) {
            // Example: Fetch and send data related to payload.customer.id
            await handleCustomersDataRequest(payload.customer.id, shop);
          }
          return json({ success: true });
      
          case "CUSTOMERS_REDACT":
            // Logic to delete customer data
            if (shop && payload.customer) {
              // Example: Delete data related to payload.customer.id
              await handleCustomersRedact(payload.customer.id, shop);
            }
            return json({ success: true });
        
          case "SHOP_REDACT":
            // Logic to delete shop data
            if (shop) {
              // Example: Delete shop-related data
              await handleShopRedact(shop);
            }
            return json({ success: true });

      default:
        console.log(`Unhandled webhook topic: ${topic}`);
        return json({ error: "Unhandled webhook topic" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
