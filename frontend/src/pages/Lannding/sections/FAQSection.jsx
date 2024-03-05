
import React, { useState } from 'react';


function FAQSection() {
  const [faqs] = useState([
    {
      question: 'What are the most popular jobs in IT field ?',
      answer: 'Most popular jobs in the IT field include software developer, data analyst, cybersecurity specialist, IT project manager, network engineer, systems administrator, cloud architect, database administrator, and AI/machine learning engineer..'
    },
    {
      question: 'What are the essential skills and qualifications needed to succeed in the IT industry?',
      answer: 'Essential skills and qualifications for success in the IT industry include proficiency in programming languages, problem-solving abilities, knowledge of networking and cybersecurity, familiarity with cloud computing, strong communication skills, and continuous learning mindset.'
    },
    {
      question: 'How can I gain practical experience and internships in the IT field?',
      answer: 'You can gain practical experience in the IT field by completing internships,participating in hackathons, contributing to open-source projects, networking with professionals, and seeking mentorship opportunities.'
    },
    {
      question: 'What are the modern emerging trends and technologies in the IT industry?',
      answer: 'Modern emerging trends and technologies in the IT industry include artificial intelligence, machine learning, blockchain, edge computing,quantum computing, Internet of Things (IoT), 5G technology, augmented reality (AR), virtual reality (VR), and cybersecurity advancements.'
    },
    {
      question: 'How can I build a strong professional network within the IT field as an undergraduate?',
      answer: 'As an undergraduate, you can build a strong professional network in the IT field by attending industry events, joining relevant student organizations.'
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questiones</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
