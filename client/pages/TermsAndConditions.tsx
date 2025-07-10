import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { ArrowLeft, Scale, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function TermsAndConditions() {
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
              <Scale size={16} className="text-accent-purple" />
              <p className="text-accent-purple font-medium tracking-wide uppercase text-sm">
                Legal Document
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Terms & Conditions
            </h1>

            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Please read these terms carefully before purchasing our digital
              products
            </p>

            <div className="flex items-center justify-center space-x-2 text-sm text-foreground/60">
              <AlertCircle size={14} />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Terms Content */}
          <div className="glass rounded-2xl p-8 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                1. Acceptance of Terms
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                By purchasing source code from Kaarthik Dass Arora ("we", "us",
                "our"), you ("buyer", "customer", "you") agree to be bound by
                these Terms and Conditions. If you do not agree to these terms,
                please do not proceed with the purchase.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                2. Product Description
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  Our products consist of digital source code packages that
                  include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Complete source code files</li>
                  <li>Documentation and setup instructions</li>
                  <li>30-day email support</li>
                  <li>GitHub repository access where applicable</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                3. License and Usage Rights
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  Upon purchase, you receive a non-exclusive license to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>
                    Use the source code for personal or commercial projects
                  </li>
                  <li>Modify and customize the code to fit your needs</li>
                  <li>Deploy applications built using our source code</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  <strong className="text-red-400">
                    You are NOT permitted to:
                  </strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Resell, redistribute, or share the source code</li>
                  <li>Claim ownership of the original source code</li>
                  <li>Remove copyright notices or attribution</li>
                  <li>
                    Use our code in products that compete directly with our
                    offerings
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                4. Payment Terms
              </h2>
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>
                    All payments must be made in full before source code
                    delivery
                  </li>
                  <li>
                    Accepted payment methods: UPI, GPay, PhonePe, Bank Transfer
                  </li>
                  <li>
                    Prices are in Indian Rupees (INR) and include all applicable
                    taxes
                  </li>
                  <li>
                    Payment confirmation via WhatsApp is required for delivery
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                5. Delivery
              </h2>
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>
                    Digital products are delivered via download link after
                    payment confirmation
                  </li>
                  <li>
                    Delivery typically occurs within 24 hours of payment
                    verification
                  </li>
                  <li>
                    You are responsible for downloading and storing the source
                    code safely
                  </li>
                  <li>
                    Re-downloads may be available for up to 30 days after
                    purchase
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                6. Support
              </h2>
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>30-day email support is included with every purchase</li>
                  <li>
                    Support covers setup assistance and basic implementation
                    questions
                  </li>
                  <li>
                    Support does not include custom development or extensive
                    modifications
                  </li>
                  <li>Response time: Within 48 hours during business days</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                7. Warranties and Disclaimers
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  Our source code is provided "as is" without any warranties.
                  While we strive to provide high-quality, bug-free code, we
                  cannot guarantee that the software will be error-free or meet
                  all your specific requirements.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We are not liable for any damages arising from the use of our
                  source code, including but not limited to direct, indirect,
                  incidental, or consequential damages.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                8. Intellectual Property
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  All source code, documentation, and related materials remain
                  the intellectual property of Kaarthik Dass Arora. The purchase
                  grants you usage rights as specified in section 3, but does
                  not transfer ownership.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                9. Privacy
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  We collect minimal personal information necessary for
                  transaction processing and support. Your information will not
                  be shared with third parties except as required for payment
                  processing.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                10. Governing Law
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  These terms are governed by the laws of India. Any disputes
                  arising from these terms or your purchase will be subject to
                  the jurisdiction of courts in India.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                11. Changes to Terms
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right to modify these terms at any time.
                  Updated terms will be posted on our website. Continued use of
                  our services after changes constitutes acceptance of new
                  terms.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-accent-purple">
                12. Contact Information
              </h2>
              <div className="space-y-3">
                <p className="text-foreground/80 leading-relaxed">
                  For questions about these terms, please contact us:
                </p>
                <div className="bg-accent-purple/10 border border-accent-purple/20 rounded-lg p-4">
                  <ul className="space-y-2 text-foreground/80">
                    <li>
                      <strong>Email:</strong> kartikdassarora@gmail.com
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +91 7529834770
                    </li>
                    <li>
                      <strong>Response Time:</strong> Within 48 hours
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Agreement Notice */}
          <div className="bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 border border-accent-purple/20 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <Shield
                size={20}
                className="text-accent-purple flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="font-semibold text-accent-purple mb-2">
                  Agreement Acknowledgment
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  By proceeding with any purchase, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms and
                  Conditions. If you have any questions, please contact us
                  before making a purchase.
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
