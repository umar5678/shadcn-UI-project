// components/common/AppLink.tsx
import Link from "next/link";
import { ReactNode } from "react";

type AppLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  onClick?: () => void;
};

export const AppLink = ({
  href,
  children,
  className,
  target,
  onClick,
}: AppLinkProps) => {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target || "_blank"}
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};
