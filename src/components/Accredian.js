import React, { useState } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const faqs = [
    {
      question: 'Who should join the Titan Batch?',
      answer: `The Titan Batch is designed for students who are serious about UPSC preparation. 
               If you aim for a well-structured approach with a focus on foundational concepts and in-depth coverage, 
               this batch is suitable for you.`
    },
    {
      question: 'Does ExamAtlas teach UPSC?',
      answer: `Yes, ExamAtlas offers comprehensive courses for UPSC preparation. 
               Although known for its expertise in science subjects, ExamAtlas has expanded its offerings to include 
               specialized UPSC content, focusing on both prelims and mains preparation.`
    },
    {
      question: 'How is ExamAtlas better for UPSC preparation?',
      answer: `ExamAtlas provides a unique blend of quality education at an affordable price. 
               Their UPSC courses stand out due to experienced educators, affordable fees, comprehensive coverage, and 
               interactive learning tools.`
    }
  ];

  return (
    <div className='pl-5'>
      <h2 className="text-3xl font-bold mt-16 mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4 mb-16">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 ">
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">{selectedQuestion === index ? '-' : '+'}</span>
            </div>
            {selectedQuestion === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
