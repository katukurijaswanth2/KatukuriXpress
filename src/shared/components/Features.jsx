import "./Features.css";

const features = [
  {
    icon: "fa-solid fa-rocket",
    title: "FREE DELIVERY",
    desc: "For all orders over $100",
  },
  {
    icon: "fa-solid fa-rotate-left",
    title: "90 DAYS RETURN",
    desc: "If goods have problems",
  },
  {
    icon: "fa-solid fa-credit-card",
    title: "SECURE PAYMENT",
    desc: "100% secure payment",
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 SUPPORT",
    desc: "Dedicated support",
  },
];

export const Features = () => {
  return (
    <div className="features-wrapper">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <i className={`${feature.icon} feature-icon`}></i>
          <div className="feature-text">
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};