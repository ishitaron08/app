import React, { useState } from 'react';

export function PromptInput({ children, onSubmit, className }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (text.trim()) {
      onSubmit({ text });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex flex-col rounded-3xl bg-white/10 backdrop-blur-xl ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { text, setText, onSubmit: handleSubmit });
        }
        return child;
      })}
    </form>
  );
}

export function PromptInputBody({ children, className, text, setText, onSubmit }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { text, setText, onSubmit });
        }
        return child;
      })}
    </div>
  );
}

export function PromptInputTextarea({ className, text, setText, onSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      className={`w-full outline-none ${className}`}
      placeholder="How can I help you?"
    />
  );
}

export function PromptInputFooter({ children, className, text, setText, onSubmit }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { text, setText, onSubmit });
        }
        return child;
      })}
    </div>
  );
}

export function PromptInputTools({ children, className, text, setText, onSubmit }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { text, setText, onSubmit });
        }
        return child;
      })}
    </div>
  );
}

export function PromptInputButton({ children, onClick, className, ...props }) {
  return (
    <button type="button" onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

export function PromptInputSubmit({ className, status }) {
  return (
    <button type="submit" disabled={status === 'streaming'} className={className}>
      {status === 'streaming' ? '...' : 'Send'}
    </button>
  );
}
