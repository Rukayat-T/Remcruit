import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function FaqItems() {
  const questionsAnswers = [
    {
      id: 0,
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      id: 1,
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 2,
      question: "How do I reset my password?",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
      id: 3,
      question: "Can I cancel my subscription?",
      answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
      id: 4,
      question: "Do you provide additional support?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
  ];
  const [accordionActive, setAccordionActive] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === accordionActive) {
      setAccordionActive(null);
    } else {
      setAccordionActive(index);
    }
  };
  return (
    <div>
      <h2>Frequently asked questions</h2>
      {questionsAnswers.map((question) => {
        return (
          <div className="question-card">
            <div
              className="review-head"
              onClick={() => handleAccordionClick(question.id)}
            >
              <p className="question-p">{question.question}</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`openbutton ${
                  accordionActive === question.id ? "displayed" : ""
                }`}
              />
            </div>
            <div
              className={`review-body ${
                accordionActive === question.id ? "displayed" : ""
              }`}
            >
              <p>{question.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqItems;
