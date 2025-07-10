// UPI Payment Configuration
export const UPI_CONFIG = {
  upiId: "kartikdassarora@okicici",
  name: "Kaarthik Dass Arora",
  currency: "INR",
  description: "Full Source Code Purchase",
  theme: {
    color: "#7c3aed",
  },
};

// Payment amounts
export const PRICING = {
  CRYPTO_BOT: 10000, // ₹10,000
};

// Generate UPI payment URL
export const generateUPIPaymentURL = (
  amount: number,
  projectTitle: string,
  transactionNote?: string,
) => {
  // Use standard UPI URL format that's compatible with all UPI apps
  const params = new URLSearchParams();
  params.set("pa", UPI_CONFIG.upiId);
  params.set("pn", UPI_CONFIG.name);
  params.set("am", amount.toString());
  params.set("cu", UPI_CONFIG.currency);
  params.set("tn", transactionNote || `${projectTitle} Source Code`);

  // Use the standard upi://pay format
  return `upi://pay?${params.toString()}`;
};

// Generate QR code for UPI payment
export const generateUPIQRCode = async (
  amount: number,
  projectTitle: string,
  transactionNote?: string,
): Promise<string> => {
  const QRCode = (await import("qrcode")).default;
  const upiURL = generateUPIPaymentURL(amount, projectTitle, transactionNote);

  try {
    const qrCodeDataURL = await QRCode.toDataURL(upiURL, {
      width: 256,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "H", // High error correction for better scanning
      type: "image/png",
    });

    return qrCodeDataURL;
  } catch (error) {
    console.error("QR Code generation error:", error);
    throw error;
  }
};

// Handle UPI payment confirmation
export const handleUPIPaymentConfirmation = (): Promise<{
  transactionId: string;
  status: string;
  amount: number;
}> => {
  return new Promise((resolve, reject) => {
    // Show payment confirmation dialog
    const userConfirmed = confirm(
      "After completing UPI payment, click OK to proceed with download.\n\n" +
        "✅ Steps to complete payment:\n" +
        "1. Scan QR code with any UPI app\n" +
        "2. Complete payment\n" +
        "3. Click OK after successful payment\n\n" +
        "If payment was successful, your download will start automatically.",
    );

    if (userConfirmed) {
      // Ask for transaction ID for verification
      const transactionId = prompt(
        "Please enter your UPI Transaction ID (optional):\n" +
          "This helps us verify your payment faster.",
      );

      resolve({
        transactionId: transactionId || `UPI_${Date.now()}`,
        status: "SUCCESS",
        amount: PRICING.CRYPTO_BOT,
      });
    } else {
      reject(new Error("Payment cancelled"));
    }
  });
};
