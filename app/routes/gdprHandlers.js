import db from "../db.server";

// Handle GDPR data request
export async function handleCustomersDataRequest(payload, shop) {
  // Check if payload.customer and payload.customer.id exist
  if (!payload.customer || typeof payload.customer.id === 'undefined') {
    console.error("Customer ID is missing from the payload.");
    return;
  }
  console.log(`Handling data request for customer ${payload.customer.id} from shop ${shop}.`);

  try {
    // Fetching customer and their orders from the database
    const customerData = await db.customer.findUnique({
      where: { id: payload.customer.id },
      include: { orders: true }, // Assuming a relation is defined
    });
    console.log(customerData);
    // TODO: Implement the logic to send this data to the store owner
  } catch (error) {
    console.error(`Error fetching data for customer ${payload.customer.id}:`, error);
  }
}

// Handle GDPR data redaction for a customer
export async function handleCustomersRedact(payload, shop) {
  if (!payload.customer || typeof payload.customer.id === 'undefined') {
    console.error("Customer ID is missing from the payload.");
    return;
  }
  console.log(`Redacting data for customer ${payload.customer.id} from shop ${shop}.`);

  try {
    // Deleting customer data
    await db.customer.delete({
      where: { id: payload.customer.id },
    });
    console.log(`Deleted data for customer ${payload.customer.id}`);
  } catch (error) {
    console.error(`Error deleting data for customer ${payload.customer.id}:`, error);
  }
}

// Handle GDPR data redaction for a shop
export async function handleShopRedact(payload) {
  // Assuming payload.shop_domain might be used as a fallback if shop_id is undefined
  const shopIdentifier = payload.shop_id || payload.shop_domain;
  if (!shopIdentifier) {
    console.error("Shop identifier (ID or domain) is missing from the payload.");
    return;
  }
  console.log(`Deleting data for shop ${shopIdentifier}.`);

  try {
    // Deleting all customer data associated with the shop
    const deletedCustomers = await db.customer.deleteMany({
      where: { shopId: payload.shop_id }, // Ensure this matches your schema
    });
    console.log(`Deleted ${deletedCustomers.count} customers for shop ${shopIdentifier}`);
    // Extend this logic to other data associated with the shop as needed
  } catch (error) {
    console.error(`Error deleting data for shop ${shopIdentifier}:`, error);
  }
}
