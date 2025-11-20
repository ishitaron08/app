import React from 'react';

export function Message({ children, from }) {
  return (
    <div className={`group flex w-full ${from === 'user' ? 'justify-end is-user' : 'justify-start is-assistant'}`}>
      {children}
    </div>
  );
}

export function MessageContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
