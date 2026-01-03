import Link from "next/link";

type Option = {
  label: string;
  href: string;
  isActive: boolean;
};

export function SegmentedToggle({
  label,
  options,
}: {
  label: string;
  options: Option[];
}) {
  return (
    <nav className="segmented" aria-label={label}>
      {options.map((o) => (
        <Link
          key={o.href}
          href={o.href}
          className={`segmented-item ${o.isActive ? "is-active" : ""}`}
          aria-current={o.isActive ? "page" : undefined}
        >
          {o.label}
        </Link>
      ))}
    </nav>
  );
}


