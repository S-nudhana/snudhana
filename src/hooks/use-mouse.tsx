'use client';
import { type RefObject, useLayoutEffect, useRef, useState } from 'react';

import type { CursorState } from '@/types/cursor';

export function useMouse(): [CursorState, RefObject<HTMLDivElement>] {
  const [state, setState] = useState<CursorState>({
    x: null,
    y: null,
    elementX: null,
    elementY: null,
    elementPositionX: null,
    elementPositionY: null,
  });

  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const handleCursorMove = (event: MouseEvent) => {
      const newState: Partial<CursorState> = {
        x: event.pageX,
        y: event.pageY,
      };

      if (ref.current instanceof Element) {
        const { left, top } = ref.current.getBoundingClientRect();
        const elementPositionX = left + window.scrollX;
        const elementPositionY = top + window.scrollY;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState((s) => ({
        ...s,
        ...newState,
      }));
    };

    document.addEventListener('mousemove', handleCursorMove);

    return () => {
      document.removeEventListener('mousemove', handleCursorMove);
    };
  }, []);

  return [state, ref];
}