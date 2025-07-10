import { useState } from "react";
import {
  X,
  CreditCard,
  Shield,
  Download,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  UPI_CONFIG,
  PRICING,
  generateUPIQRCode,
  generateUPIPaymentURL,
  handleUPIPaymentConfirmation,
} from "@/config/razorpay";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    price: string;
    githubUrl: string;
  };
}

declare global {
  interface Window {
    // Instamojo uses redirect-based payments, no JS SDK needed
  }
}

export function PaymentModal({ isOpen, onClose, project }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "qr_shown" | "success" | "failed"
  >("idle");
  const [qrCodeImage, setQrCodeImage] = useState<string>("");
  const [upiUrl, setUpiUrl] = useState<string>("");

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      // Generate UPI URL for payment
      const upiPaymentUrl = generateUPIPaymentURL(
        PRICING.CRYPTO_BOT,
        project.title,
        `${project.title} source code purchase`,
      );

      // Generate QR code using QR Server API with proper encoding
      const encodedUpiUrl = encodeURIComponent(upiPaymentUrl);
      const qrServerUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedUpiUrl}`;

      setQrCodeImage(qrServerUrl);
      setUpiUrl(upiPaymentUrl);
      setPaymentStatus("qr_shown");
      setIsProcessing(false);
    } catch (error) {
      console.error("QR Code generation error:", error);
      setPaymentStatus("failed");
      setIsProcessing(false);
    }
  };

  const handlePaymentConfirmation = async () => {
    setIsProcessing(true);

    try {
      const paymentResult = await handleUPIPaymentConfirmation();

      if (paymentResult.status === "SUCCESS") {
        setPaymentStatus("success");
        setIsProcessing(false);

        // Send WhatsApp confirmation with transaction details
        const confirmationMessage = `✅ *Payment Completed Successfully!*

🏷️ *Product:* ${project.title}
💰 *Amount:* ₹${PRICING.CRYPTO_BOT}
🆔 *Transaction ID:* ${paymentResult.transactionId}
📧 *UPI ID:* ${UPI_CONFIG.upiId}

Thank you for your purchase! Please confirm this payment so I can provide instant access to:

✅ Complete source code
✅ Documentation & setup guide
✅ GitHub repository access
✅ 30-day email support

I'll send the download link shortly!`;

        const encodedMessage = encodeURIComponent(confirmationMessage);
        window.open(
          `https://wa.me/917529834770?text=${encodedMessage}`,
          "_blank",
        );

        // Start download after brief delay
        setTimeout(() => {
          handleDownload();
        }, 2000);
      }
    } catch (error) {
      // Handle payment cancellation gracefully
      if (error.message === "Payment cancelled") {
        // User cancelled payment, just reset processing state
        setIsProcessing(false);
        // Stay in QR shown state so user can try again
      } else {
        // Handle other errors
        console.error("Payment confirmation error:", error);
        setPaymentStatus("failed");
        setIsProcessing(false);
      }
    }
  };

  const handleDownload = async () => {
    try {
      // Create download link for the zip file
      const link = document.createElement("a");
      link.href = "/.netlify/functions/download-source";
      link.download = `${project.title.replace(/\s+/g, "_")}_SourceCode.zip`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Send confirmation email or WhatsApp message
      const confirmationMessage = `🎉 Thank you for purchasing ${project.title}!

✅ Payment: ₹10,000 - Successful
📦 Download: Started automatically
📧 Support: kartikdassarora@gmail.com
📱 WhatsApp: +91 7529834770

Your 30-day support period starts now!`;

      // Optional: Open WhatsApp for confirmation
      setTimeout(() => {
        window.open(
          `https://wa.me/917529834770?text=${encodeURIComponent(confirmationMessage)}`,
          "_blank",
        );
      }, 2000);

      // Also provide GitHub access
      setTimeout(() => {
        window.open(project.githubUrl, "_blank");
      }, 1000);
    } catch (error) {
      console.error("Download error:", error);
      alert(
        "Download failed. Please contact support at kartikdassarora@gmail.com",
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-accent-purple/20 p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold gradient-text">
            Purchase Source Code
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-light rounded-lg transition-colors"
          >
            <X size={20} className="text-foreground/60" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {paymentStatus === "idle" && (
            <>
              {/* Project Details */}
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 rounded-lg border border-accent-purple/20">
                  <h3 className="font-semibold text-accent-purple mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    Complete source code with documentation and setup
                    instructions
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400 flex items-center">
                      ₹10,000
                    </span>
                    <span className="text-sm text-foreground/60 line-through">
                      ₹15,000
                    </span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground/90">
                    What's Included:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span>Complete source code with all files</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span>Documentation and setup guide</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span>Email support for 30 days</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span>GitHub repository access</span>
                    </div>
                  </div>
                </div>

                {/* UPI Details */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground/90">
                    UPI Payment Details:
                  </h4>
                  <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/70">UPI ID:</span>
                        <span className="font-mono text-accent-blue">
                          {UPI_CONFIG.upiId}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/70">Name:</span>
                        <span className="font-semibold">{UPI_CONFIG.name}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/70">Amount:</span>
                        <span className="font-bold text-green-400">
                          ₹10,000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="flex items-center space-x-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <Shield size={16} className="text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-blue-400 font-medium">Secure Payment</p>
                    <p className="text-foreground/70">
                      Direct UPI payment - Safe & secure
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <Button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Loading Payment QR...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <CreditCard size={20} />
                    <span>Show Payment QR Code</span>
                  </div>
                )}
              </Button>

              <p className="text-xs text-foreground/60 text-center">
                By proceeding, you agree to our{" "}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  className="text-accent-purple hover:underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/refund-policy"
                  target="_blank"
                  className="text-accent-purple hover:underline"
                >
                  Refund Policy
                </a>
              </p>
            </>
          )}

          {paymentStatus === "qr_shown" && (
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-accent-purple mb-2">
                  Scan QR Code to Pay
                </h3>
                <p className="text-foreground/70">
                  Use any UPI app to scan and pay ₹10,000
                </p>
              </div>

              {/* QR Code */}
              <div className="flex justify-center">
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <img
                    src={qrCodeImage}
                    alt="UPI QR Code - Scan to pay ₹10,000"
                    className="w-72 h-72 mx-auto object-contain"
                    style={{ display: "block", margin: "10px auto" }}
                  />
                </div>
              </div>

              {/* UPI Details */}
              <div className="bg-accent-purple/10 border border-accent-purple/20 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Pay to:</span>
                    <span className="font-semibold">{UPI_CONFIG.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">UPI ID:</span>
                    <span className="font-mono text-accent-purple">
                      {UPI_CONFIG.upiId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Amount:</span>
                    <span className="font-bold text-green-400">₹10,000</span>
                  </div>
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-400 mb-2">
                  How to pay:
                </h4>
                <ol className="text-sm text-foreground/80 space-y-1 text-left">
                  <li>1. Open any UPI app (GPay, PhonePe, Paytm, etc.)</li>
                  <li>2. Scan the QR code above</li>
                  <li>3. Verify amount: ₹10,000</li>
                  <li>4. Complete the payment</li>
                  <li>5. Click "I've Paid" button below</li>
                </ol>
              </div>

              {/* Alternative Payment Link */}
              <div className="space-y-3">
                <p className="text-sm text-foreground/60">
                  Or click the button below to open UPI app directly:
                </p>
                <Button
                  onClick={() => window.open(upiUrl, "_blank")}
                  variant="outline"
                  className="w-full border-accent-blue text-accent-blue hover:bg-accent-blue/10"
                >
                  Pay via UPI App
                </Button>
              </div>

              {/* Confirmation Button */}
              <Button
                onClick={handlePaymentConfirmation}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 text-lg font-semibold rounded-xl"
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Confirming...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={20} />
                    <span>I've Completed Payment</span>
                  </div>
                )}
              </Button>

              <Button
                onClick={() => setPaymentStatus("idle")}
                variant="outline"
                className="w-full border-accent-purple text-accent-purple hover:bg-accent-purple/10"
              >
                ← Back to Payment Details
              </Button>
            </div>
          )}

          {paymentStatus === "success" && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={32} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  Payment Successful!
                </h3>
                <p className="text-foreground/70 mb-4">
                  Thank you for your purchase. Your download will start
                  automatically.
                </p>
                <div className="flex items-center justify-center space-x-2 text-accent-purple">
                  <Download size={16} />
                  <span className="text-sm">Preparing your download...</span>
                </div>
              </div>
            </div>
          )}

          {paymentStatus === "failed" && (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle size={32} className="text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-2">
                  Payment Failed
                </h3>
                <p className="text-foreground/70 mb-4">
                  Something went wrong with your payment. Please try again.
                </p>
                <Button
                  onClick={() => {
                    setPaymentStatus("idle");
                    handlePayment();
                  }}
                  className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-6 py-2 rounded-xl"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
