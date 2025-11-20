import React from 'react';

export function Shimmer({ children, className }) {
  return <div className={`animate-pulse ${className}`}>{children}</div>;
}
