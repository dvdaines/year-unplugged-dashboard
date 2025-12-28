'use client';

import { useState } from 'react';

export default function EmailProtection() {
  const [copied, setCopied] = useState(false);
  
  const handleClick = () => {
    // The email is constructed at runtime
    const parts = ['contact', '@', 'yearunplugged', '.', 'com'];
    const email = parts.join('');
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span 
      className="reversed-email underline underline-offset-4 hover:opacity-80" 
      onClick={handleClick} 
      style={{ cursor: 'pointer', direction: 'rtl', unicodeBidi: 'bidi-override' }}
    >
      {copied ? '!deipoC' : 'moc.deggulpnuraey@tcatnoc'}
    </span>
  );
}

