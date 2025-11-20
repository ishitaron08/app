import React from 'react';

export function Conversation({ children, className }) {
  return <div className={`flex flex-col h-full overflow-y-auto ${className}`}>{children}</div>;
}

export function ConversationContent({ children, className }) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}

export function ConversationScrollButton({ className }) {
  return null; // Simplified: no scroll button for now
}
