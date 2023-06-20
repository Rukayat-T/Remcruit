import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import Puzzle from  "./Puzzle.svg";
import Legal from  "./Legal.svg";
import Bulb from  "./Bulb.svg";
import './Faq.css'
function FaqCards() {
  const FaqContent = [
    {
      title: "Getting Started",
      path: "/getting-started",
      class: "faq-card",
      icon: Puzzle,
    },
    {
      title: "Job Search Tips",
      path: "/job-search-tips",
      class: "faq-card",
      icon: Bulb,
    },
    {
      title: "Legal FAQs",
      path: "/legal-faq",
      class: "faq-card",
      icon: Legal,
    },
  ];
  return <div className="faq-cards">
    {
        FaqContent.map(content => {
            return (
            <div className={content.class}>
              <img src={content.icon} alt="" />
              <p>{content.title}</p>
              <FontAwesomeIcon icon={faArrowRightLong} size="xl" />
            </div>
            )
        })
    }
  </div>;
}

export default FaqCards;
