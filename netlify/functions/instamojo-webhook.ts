import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  // Instamojo webhook handler for payment verification

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};

    // Verify the webhook signature (in production)
    // const signature = event.headers["x-instamojo-signature"];
    // const isValidSignature = verifyWebhookSignature(body, signature);

    // For demo purposes, we'll accept all webhooks
    console.log("Instamojo webhook received:", body);

    // Process the payment notification
    const { payment_id, payment_request_id, status, amount } = body;

    if (status === "Credit") {
      // Payment successful
      console.log(`Payment successful: ${payment_id} for amount: ₹${amount}`);

      // Here you would:
      // 1. Update your database
      // 2. Send confirmation email
      // 3. Grant access to the product
      // 4. Log the transaction

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Payment processed successfully",
          payment_id,
          status: "success",
        }),
      };
    } else {
      // Payment failed or pending
      console.log(`Payment status: ${status} for payment: ${payment_id}`);

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "Payment status updated",
          payment_id,
          status,
        }),
      };
    }
  } catch (error) {
    console.error("Webhook processing error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Webhook processing failed" }),
    };
  }
};

// Function to verify webhook signature (implement in production)
function verifyWebhookSignature(payload: any, signature: string): boolean {
  // Implement Instamojo webhook signature verification
  // This is crucial for security in production
  return true; // Demo only
}
