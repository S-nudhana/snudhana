'use client';

import React, { useEffect } from 'react';

import type { FollowCursorProps } from '@/types/cursor';

const XL_BREAKPOINT = 1280;
const CURSOR_COLOR = '#BCBBBBB3';

const FollowCursor: React.FC<FollowCursorProps> = ({ color = CURSOR_COLOR }) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isActive = false;

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;

      constructor(x: number, y: number, width: number, lag: number) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
      }

      moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
      }
    }

    const dot = new Dot(width / 2, height / 2, 10, 1);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      if (width < XL_BREAKPOINT && isActive) {
        destroy();
        isActive = false;
        return;
      }

      if (width >= XL_BREAKPOINT && !isActive && !prefersReducedMotion.matches) {
        init();
        isActive = true;
        return;
      }

      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (isActive) return;
      if (prefersReducedMotion.matches) {
        console.log('Reduced motion enabled, cursor effect skipped.');
        return;
      }
      if (width < XL_BREAKPOINT) {
        return;
      }

      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '999999';
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      animationFrame = requestAnimationFrame(loop);
      isActive = true;
    };

    const destroy = () => {
      if (!isActive) return;
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      isActive = false;
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else if (width >= XL_BREAKPOINT) {
        init();
      }
    };

    if (width >= XL_BREAKPOINT && !prefersReducedMotion.matches) {
      init();
    }

    return () => {
      destroy();
    };
  }, [color]);

  return null;
};

export default FollowCursor;
