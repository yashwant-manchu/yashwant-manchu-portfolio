"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export const CustomCursor = () => {
    const dotRef   = useRef<HTMLDivElement>(null);
    const ringRef  = useRef<HTMLDivElement>(null);
    const posRef   = useRef({ x: -100, y: -100 });
    const rafRef   = useRef<number | null>(null);

    const [isHovering, setIsHovering] = useState(false);
    const [isVisible,  setIsVisible]  = useState(false);

    /* ── move both cursors via RAF — no React state, zero re-renders ── */
    const moveCursors = useCallback(() => {
        const { x, y } = posRef.current;
        if (dotRef.current) {
            dotRef.current.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
        }
        if (ringRef.current) {
            ringRef.current.style.transform = `translate(${x - 18}px, ${y - 18}px)`;
        }
        rafRef.current = requestAnimationFrame(moveCursors);
    }, []);

    useEffect(() => {
        /* Only activate on pointer devices */
        if (!window.matchMedia("(hover: hover)").matches) return;

        /* ── Inject global cursor: none ONCE so it applies before any
           element's own cursor style can override it ── */
        const styleTag = document.createElement("style");
        styleTag.id = "custom-cursor-hide";
        styleTag.textContent = `
      *, *::before, *::after,
      a, button, input, textarea, select, label, [role="button"] {
        cursor: none !important;
      }
    `;
        document.head.appendChild(styleTag);

        /* ── Track mouse ── */
        const onMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };
        const onLeave  = () => setIsVisible(false);
        const onEnter  = () => setIsVisible(true);

        window.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseleave", onLeave);
        document.addEventListener("mouseenter", onEnter);

        /* ── Hover detection ── */
        const SELECTORS = "a, button, input, textarea, select, label, [role='button'], .cursor-hover";

        const setHover   = () => setIsHovering(true);
        const clearHover = () => setIsHovering(false);

        const attachHover = (el: Element) => {
            el.addEventListener("mouseenter", setHover,   { passive: true });
            el.addEventListener("mouseleave", clearHover, { passive: true });
        };
        const detachHover = (el: Element) => {
            el.removeEventListener("mouseenter", setHover);
            el.removeEventListener("mouseleave", clearHover);
        };

        document.querySelectorAll(SELECTORS).forEach(attachHover);

        const observer = new MutationObserver((mutations) => {
            for (const m of mutations) {
                m.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const el = node as Element;
                        if (el.matches?.(SELECTORS)) attachHover(el);
                        el.querySelectorAll?.(SELECTORS).forEach(attachHover);
                    }
                });
                m.removedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const el = node as Element;
                        if (el.matches?.(SELECTORS)) detachHover(el);
                    }
                });
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });

        /* Start RAF loop */
        rafRef.current = requestAnimationFrame(moveCursors);

        return () => {
            styleTag.remove();
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("mouseenter", onEnter);
            document.querySelectorAll(SELECTORS).forEach(detachHover);
            observer.disconnect();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [moveCursors, isVisible]);

    /* Keep dot/ring CSS classes in sync with hover state */
    useEffect(() => {
        if (!dotRef.current || !ringRef.current) return;
        if (isHovering) {
            dotRef.current.style.width  = "10px";
            dotRef.current.style.height = "10px";
            dotRef.current.style.marginLeft = "2px";
            dotRef.current.style.marginTop  = "2px";
            ringRef.current.style.width  = "42px";
            ringRef.current.style.height = "42px";
            ringRef.current.style.borderColor = "var(--accent)";
            ringRef.current.style.opacity = "0.7";
        } else {
            dotRef.current.style.width  = "12px";
            dotRef.current.style.height = "12px";
            dotRef.current.style.marginLeft = "0";
            dotRef.current.style.marginTop  = "0";
            ringRef.current.style.width  = "36px";
            ringRef.current.style.height = "36px";
            ringRef.current.style.borderColor = "var(--accent)";
            ringRef.current.style.opacity = "0.35";
        }
    }, [isHovering]);

    if (!isVisible) return null;

    return (
        <>
            {/* Solid dot — snaps to cursor position */}
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    pointerEvents: "none",
                    zIndex: 99999,
                    willChange: "transform",
                    transition: "width 0.18s ease, height 0.18s ease",
                }}
            />

            {/* Outer ring — slightly lags for a fluid feel */}
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1.5px solid var(--accent)",
                    opacity: 0.35,
                    pointerEvents: "none",
                    zIndex: 99998,
                    willChange: "transform",
                    transition: "width 0.22s ease, height 0.22s ease, opacity 0.22s ease, border-color 0.22s ease",
                }}
            />
        </>
    );
};
