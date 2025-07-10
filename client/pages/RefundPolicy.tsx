import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import {
  ArrowLeft,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function RefundPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-6">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-accent-purple text-accent-purple hover:bg-accent-purple/10 mb-4"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>

            <div className="flex items-center justify-center space-x-2">
              <RefreshCw size={16} className="text-accent-purple" />
              <p className="text-accent-purple font-medium tracking-wide uppercase text-sm">
                Refund Policy
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Refund & Return Policy
            </h1>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Understanding our refund policy for digital source code products
            </p>

            <div className="flex items-center justify-center space-x-2 text-sm text-foreground/60">
              <AlertTriangle size={14} />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Policy Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-green-400" />
              </div>
              <h3 className="font-semibold text-green-400 mb-2">
                7-Day Guarantee
              </h3>
              <p className="text-sm text-foreground/70">
                Technical issues or major functionality problems qualify for
                full refund within 7 days
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={24} className="text-yellow-400" />
              </div>
              <h3 className="font-semibold text-yellow-400 mb-2">
                Limited Refunds
              </h3>
              <p className="text-sm text-foreground/70">
                Digital products are non-returnable once downloaded except for
                valid technical reasons
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <XCircle size={24} className="text-red-400" />
              </div>
              <h3 className="font-semibold text-red-400 mb-2">No Returns</h3>
              <p className="text-sm text-foreground/70">
                Change of mind, lack of skills, or project cancellation are not
                valid refund reasons
              </p>
            </div>
          </div>

          {/* Detailed Policy */}
          <div className="glass rounded-2xl p-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                1. Digital Product Nature
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Our source code products are digital downloads that are
                delivered immediately upon payment confirmation. Due to the
                nature of digital products, they cannot be "returned" in the
                traditional sense once downloaded and accessed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                2. Refund Eligibility
              </h2>
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-green-400 mb-3 flex items-center">
                    <CheckCircle size={16} className="mr-2" />
                    Valid Refund Reasons (Within 7 Days)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                    <li>Source code is corrupted or incomplete</li>
                    <li>
                      Major functionality described is missing or non-functional
                    </li>
                    <li>
                      Code contains fundamental errors that prevent basic
                      operation
                    </li>
                    <li>
                      Product significantly differs from the description
                      provided
                    </li>
                    <li>
                      Technical issues that cannot be resolved with our support
                    </li>
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-red-400 mb-3 flex items-center">
                    <XCircle size={16} className="mr-2" />
                    Invalid Refund Reasons
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                    <li>Change of mind or no longer needing the product</li>
                    <li>Lack of programming skills to implement the code</li>
                    <li>
                      Project cancellation or change in business direction
                    </li>
                    <li>
                      Incompatibility with your specific requirements (not
                      mentioned in description)
                    </li>
                    <li>Minor bugs or issues that can be fixed with support</li>
                    <li>Requests made after the 7-day refund period</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                3. Refund Process
              </h2>
              <div className="space-y-3">
                <h3 className="font-semibold text-accent-blue">
                  Step 1: Contact Us
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Contact us within 7 days of purchase via WhatsApp (+91
                  7529834770) or email (kartikdassarora@gmail.com) with your
                  payment details and specific reason for refund request.
                </p>

                <h3 className="font-semibold text-accent-blue">
                  Step 2: Provide Evidence
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  For technical issues, provide screenshots, error messages, or
                  detailed description of the problem. Our support team will
                  attempt to resolve the issue first.
                </p>

                <h3 className="font-semibold text-accent-blue">
                  Step 3: Review Process
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  We will review your refund request within 48 hours. If the
                  issue cannot be resolved and meets our refund criteria, we
                  will approve the refund.
                </p>

                <h3 className="font-semibold text-accent-blue">
                  Step 4: Refund Processing
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Approved refunds will be processed within 5-7 business days
                  using the same payment method used for purchase.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                4. Refund Timeline
              </h2>
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>
                    <strong>Request Period:</strong> Within 7 days of purchase
                  </li>
                  <li>
                    <strong>Review Time:</strong> 48 hours maximum
                  </li>
                  <li>
                    <strong>Processing Time:</strong> 5-7 business days after
                    approval
                  </li>
                  <li>
                    <strong>Bank Credit:</strong> Additional 3-5 business days
                    depending on your bank
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                5. Partial Refunds
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  In some cases, we may offer partial refunds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>If only part of the source code package has issues</li>
                  <li>
                    If significant support time has been provided to resolve
                    issues
                  </li>
                  <li>
                    If the product has been partially used for commercial
                    purposes
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                6. Chargeback Policy
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  <strong className="text-red-400">Important:</strong> Filing a
                  chargeback or payment dispute without first contacting us may
                  result in:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Immediate termination of support services</li>
                  <li>Revocation of license to use the source code</li>
                  <li>Being blacklisted from future purchases</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  Please contact us first to resolve any issues before
                  initiating payment disputes.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                7. Support First Approach
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  Before requesting a refund, we encourage you to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Contact our support team for assistance</li>
                  <li>Provide detailed information about any issues</li>
                  <li>Allow us 48 hours to help resolve problems</li>
                  <li>Ask questions about implementation or usage</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed">
                  Many issues can be resolved quickly with proper support,
                  avoiding the need for refunds.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                8. Contact for Refunds
              </h2>
              <div className="bg-accent-purple/10 border border-accent-purple/20 rounded-lg p-4">
                <h3 className="font-semibold text-accent-purple mb-3">
                  Refund Request Contacts
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>
                    <strong>Primary:</strong> WhatsApp: +91 7529834770
                  </li>
                  <li>
                    <strong>Email:</strong> kartikdassarora@gmail.com
                  </li>
                  <li>
                    <strong>Subject Line:</strong> "Refund Request - [Order
                    ID/Product Name]"
                  </li>
                  <li>
                    <strong>Response Time:</strong> Within 48 hours
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle
                size={20}
                className="text-yellow-400 flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">
                  Important Notice
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  This refund policy applies only to source code purchases from
                  Kaarthik Dass Arora. By making a purchase, you acknowledge
                  that you have read and understood this policy. We reserve the
                  right to update this policy at any time, with changes applying
                  to future purchases only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
