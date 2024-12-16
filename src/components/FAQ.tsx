import React, { useState } from "react";

// Define the TypeScript interface for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Define the props type for the component
interface FAQProps {
  title: string;
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({
  title,
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-12 px-6 sm:px-12 lg:px-24">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-4xl font-bold text-blue-500">{title}</h1>
      </div>

  

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto space-y-2">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-blue-800 hover:border-blue-500 text-blue-800 hover:text-blue-500 ">
            <button
              className="w-full flex justify-between items-center py-4 text-left  text-lg font-normal focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-sm md:text-xl lg:text-3xl ">{item.question}</span>
              <span className="text-sm md:text-xl lg:text-3xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 px-2 text-gray-600 text-md font-semibold leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
