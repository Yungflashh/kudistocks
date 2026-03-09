import { useState } from "react";
import "./Onboarding.css";

const pages = [
  {
    img: "/onboarding1.png",
    title: "Stay in Control of Your Stock",
    text: "Track inventory, know what you have, what’s running low, and what sells the most all in one place.",
  },
  {
    img: "/onboarding2.png",
    title: "Make Smarter Business Decisions",
    text: "Get AI-powered sales forecasts, smart reorder advice, and clear financial insights.",
  },
  {
    img: "/onboarding3.png",
    title: "Smart Inventory, Smarter Finance",
    text: "Manage your stock, sales, and finances in one simple app built for African businesses.",
  },
  {
    img: "/onboarding4.png",
    title: "Ready to Grow Your Business?",
    text: "Join thousands of SMEs using KudiStocks to manage inventory, track finances, and unlock access to credit.",
    last: true,
  },
];

export default function Onboarding({ onComplete }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < pages.length - 1) {
      setIndex(index + 1);
    } else {
      onComplete();
    }
  };

  const { img, title, text, last } = pages[index];

  return (
    <div className="onboarding">
      <div className="top-bar">
        <div className="indicator">
          {pages.map((_, i) => (
            <span key={i} className={i === index ? "active" : ""}></span>
          ))}
        </div>
      </div>
      <div className="content">
        <img src={img} alt={title} className="onboarding-img" />
        <h2 className="onboarding-title">{title}</h2>
        <p className="onboarding-text">{text}</p>
      </div>
      <div className="onboarding-footer">
        {!last ? (
          <button className="btn-primary" onClick={next}>
            Next
          </button>
        ) : (
          <div className="actions">
            <button className="btn-primary" onClick={onComplete}>
              Login
            </button>
            <button className="btn-secondary" onClick={onComplete}>
              Create account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
