import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "How accurate is the social media account age checker?",
      answer:
        "Our tool provides highly accurate creation dates based on publicly available information from social media platforms. However, accuracy may vary depending on the platform and account privacy settings.",
    },
    {
      question: "Which social media platforms do you support?",
      answer:
        "We currently support X (Twitter), Instagram, TikTok, Facebook, and YouTube. We are continuously working to add support for more platforms.",
    },
    {
      question: "Is it free to check social media account creation date?",
      answer:
        "Yes, our basic account age checking service is completely free. We may offer premium features in the future for advanced analytics.",
    },
    {
      question: "Can I check private account information?",
      answer:
        "No, we only access publicly available information. Private accounts that require following or approval cannot be analyzed through our tools.",
    },
    {
      question: "How do you get the account creation date?",
      answer:
        "We use various methods including platform APIs, public data scraping (where permitted), and analysis of account metadata to determine creation dates.",
    },
    {
      question: "Why would I need to check someone's social media account age?",
      answer:
        "Checking account age helps verify authenticity, identify fake accounts, research business accounts, and ensure you're interacting with legitimate profiles.",
    },
  ];

  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Find answers to common questions about checking social media account
            age online
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-4 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-base sm:text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-primary-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6">
              Contact our support team for more information about our social
              media account checking tools.
            </p>
            <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
