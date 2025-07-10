import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [downloadStarted, setDownloadStarted] = useState(false);

  const paymentId = searchParams.get("payment_id");
  const paymentRequestId = searchParams.get("payment_request_id");
  const status = searchParams.get("payment_status");

  useEffect(() => {
    // Auto-start download if payment is successful
    if (status === "Credit" && !downloadStarted) {
      setTimeout(() => {
        handleDownload();
        setDownloadStarted(true);
      }, 2000);
    }
  }, [status, downloadStarted]);

  const handleDownload = async () => {
    try {
      // Trigger download
      const link = document.createElement("a");
      link.href = "/.netlify/functions/download-source";
      link.download = "CryptoTradingBot_SourceCode.zip";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Send confirmation message
      const confirmationMessage = `🎉 Thank you for purchasing Crypto Trading Bot!

✅ Payment ID: ${paymentId}
💰 Amount: ₹10,000
📦 Download: Started automatically
📧 Support: kartikdassarora@gmail.com
📱 WhatsApp: +91 7529834770

Your 30-day support period starts now!`;

      setTimeout(() => {
        window.open(
          `https://wa.me/917529834770?text=${encodeURIComponent(confirmationMessage)}`,
          "_blank",
        );
      }, 1000);

      // Redirect to GitHub
      setTimeout(() => {
        window.open(
          "https://github.com/KaarthikDassArora/CryptoTradingBot.git",
          "_blank",
        );
      }, 2000);
    } catch (error) {
      console.error("Download error:", error);
      alert(
        "Download failed. Please contact support at kartikdassarora@gmail.com",
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="py-32 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {status === "Credit" ? (
            <>
              {/* Success State */}
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={48} className="text-green-400" />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold gradient-text">
                  Payment Successful! 🎉
                </h1>
                <p className="text-xl text-foreground/70">
                  Thank you for purchasing the Crypto Trading Bot source code
                </p>
              </div>

              <div className="glass rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-foreground/60">Payment ID</p>
                    <p className="font-mono text-sm text-accent-purple">
                      {paymentId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Amount</p>
                    <p className="font-semibold text-green-400">₹10,000</p>
                  </div>
                </div>

                <div className="border-t border-accent-purple/20 pt-6">
                  <h3 className="font-semibold mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span className="text-sm">
                        Download will start automatically
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span className="text-sm">
                        GitHub repository access granted
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span className="text-sm">
                        30-day email support included
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span className="text-sm">
                        Confirmation message via WhatsApp
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleDownload}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white flex-1"
                  >
                    <Download size={18} className="mr-2" />
                    Download Again
                  </Button>
                  <Button
                    onClick={() => navigate("/projects")}
                    variant="outline"
                    className="border-accent-purple text-accent-purple hover:bg-accent-purple/10 flex-1"
                  >
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Projects
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Failed State */}
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={48} className="text-red-400" />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-red-400">
                  Payment Failed
                </h1>
                <p className="text-xl text-foreground/70">
                  There was an issue processing your payment
                </p>
              </div>

              <div className="glass rounded-2xl p-8 space-y-6">
                <p className="text-foreground/80">
                  Don't worry! No charges have been made to your account. Please
                  try again or contact support if the issue persists.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => navigate("/projects")}
                    className="bg-gradient-to-r from-accent-purple to-accent-pink text-white flex-1"
                  >
                    Try Again
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/917529834770", "_blank")
                    }
                    variant="outline"
                    className="border-accent-purple text-accent-purple hover:bg-accent-purple/10 flex-1"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
