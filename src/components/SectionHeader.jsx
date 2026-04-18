import "./SectionHeader.css";

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
      <div className="section-divider"></div>
    </div>
  );
};