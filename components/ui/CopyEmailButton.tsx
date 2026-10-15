"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
};

export function CopyEmailButton({ email, label, copiedLabel }: CopyEmailButtonProps) {
  const [copied,setCopied] = useState(false);


  const copyEmail = async () =>{
      await navigator.clipboard.writeText(email); 
    setCopied(true)
    
    setTimeout(() => {
    setCopied(false)
}, 2000);
  }
  
  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
    >
      {/* Only exists while copied, so the pop animation replays on every click */}
      {copied && (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 animate-pop"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
      )}
      {copied ? copiedLabel : label}
    </button>
  );
}
