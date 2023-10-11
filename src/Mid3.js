import React, { useState } from "react";
import "./Mid3.css";

function Mid3() {
  const questions = [
    {
      id: 1,
      question: " How can I get in touch with your support team?",
      answer: "You can reach out to our support team through the chat feature on our website. Simply click on the chat icon in the bottom-right corner of the page to start a conversation with us. If you prefer, you can also schedule a call or video call by selecting the respective option in the chat window.",
    },
    {
      id: 2,
      question: "Are calls and video calls secure and private?",
      answer: "Yes, your calls and video calls are encrypted and secure. We prioritize your privacy and use industry-standard encryption protocols to ensure that your conversations remain confidential. ",
    },
    {
      id: 3,
      question: "What are the operating system and browser requirements for using the video call feature?",
      answer: "Our video call feature is compatible with most modern web browsers, including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest versions of these browsers. Please ensure that your device's camera and microphone are enabled.",
    },
    {
      id: 4,
      question: " Is there a cost associated with using the chat, call, or video call services?",
      answer: "No, our chat, call, and video call services are completely free of charge. You can communicate with us at no cost. However, if there are any premium features or services offered in the future, we will clearly communicate any associated fees.",
    },
    {
      id: 5,
      question: "What should I do if I'm experiencing technical difficulties during a call or video call?",
      answer: "If you encounter any technical issues during a call or video call, please try refreshing your browser first. If the problem persists, check that your internet connection is stable and that you have granted necessary permissions for camera and microphone access. If you continue to experience problems, please contact our support team for further assistance.",
    },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="faqContainer" id="faqContainer">
      <div className="faqHead">
        <h2>FAQ's</h2>
      </div>
      <div className="algo-container">
        {questions.map((q) => (
          <div key={q.id} className="question-container">
            <div className="question" onClick={() => handleQuestionClick(q.id)}>
              {q.question}
            </div>
            {selectedQuestion === q.id && (
              <div className="answer">{q.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mid3;