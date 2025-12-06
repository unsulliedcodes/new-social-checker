import React from "react";
import Hero from "../components/Hero";
import HowToUse from "../components/HowToUse";
import FAQ from "../components/FAQ";
import ToolCard from "../components/ToolCard";
import { TOOLS } from "../utils/constants";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Tools Section */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Social Media Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive suite of tools to check, analyze, and verify social
              media accounts across all major platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {TOOLS.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Social Check?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Lightning Fast
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Get results in seconds with our optimized tools
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Highly Accurate
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Precise data from reliable sources and APIs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl">🛡️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Completely Free
                  </h4>
                  <p className="text-gray-600 text-sm">
                    No hidden costs, no registration required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowToUse />
      <FAQ />
    </div>
  );
};

export default Home;
