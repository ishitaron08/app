import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Response({ children, className }) {
  return (
    <div className={className}>
      {typeof children === 'string' ? <ReactMarkdown>{children}</ReactMarkdown> : children}
    </div>
  );
}
