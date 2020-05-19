import * as React from 'react';
import { createPortal } from 'react-dom';

export const usePortal = (content: React.ReactNode, selector?: string) => {
  const [ mounted, setMounted ] = React.useState<boolean>();
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (selector) {
      ref.current = document.querySelector(selector);
    }

    setMounted(true);
  }, [selector]);

  if (!selector || !mounted) return null;

  return createPortal(content, ref.current);
};
