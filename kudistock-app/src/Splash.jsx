import { useEffect } from "react";
import "./Splash.css";

export default function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 6000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash">
      <div className="splash-content">
        <img src="/logo2.png" alt="KudiStocks Logo" className="splash-logo" />
        <h1 className="splash-text">Kudistocks.</h1>
      </div>
      <div className="splash-footer">
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
}
