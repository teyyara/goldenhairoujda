import { Link } from "react-router-dom";

export default function ButtonLink({ to, children, variant = "solid", external = false }) {
  const className = `button button-${variant}`;

  if (external) {
    return (
      <a className={className} href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <Link className={className} to={to}>{children}</Link>;
}
