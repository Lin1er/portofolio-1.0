"use client";

import React from "react";

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "div";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "8xl";
}

export default function Title({
  children,
  className = "",
  as = "h2",
  size = "xl",
}: TitleProps) {
  const Tag = as as any;
  return (
    <Tag className={`text-${size} font-semibold leading-snug ${className}`}>
      {children}
    </Tag>
  );
}
