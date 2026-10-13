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
     
      {copied ? copiedLabel : label}
    </button>
  );
}
