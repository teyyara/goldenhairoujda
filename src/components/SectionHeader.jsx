export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children ? <div className="section-header-aside">{children}</div> : null}
    </div>
  );
}
