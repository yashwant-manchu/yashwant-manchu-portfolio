"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const updateMousePosition = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    const handleMouseEnter = useCallback(() => setIsHovering(true), []);
    const handleMouseLeave = useCallback(() => setIsHovering(false), []);

    useEffect(() => {
        const supportsHover = window.matchMedia('(hover: hover)').matches;
        if (!supportsHover) return;

        // Hide default cursor globally
        document.body.style.cursor = 'none';
        
        // Apply cursor: none to all elements
        const style = document.createElement('style');
        style.innerHTML = `
            *, *:before, *:after {
                cursor: none !important;
            }
        `;
        document.head.appendChild(style);

        let ticking = false;
        const throttledMouseMove = (e: MouseEvent) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateMousePosition(e);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("mousemove", throttledMouseMove, { passive: true });
        document.addEventListener("mouseleave", () => setIsVisible(false));
        document.addEventListener("mouseenter", () => setIsVisible(true));

        const interactiveElements = document.querySelectorAll(
            "a, button, .cursor-hover, [role='button'], input, textarea, select"
        );
        
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter, { passive: true });
            el.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        });

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const element = node as Element;
                        if (element.matches && element.matches("a, button, .cursor-hover, [role='button'], input, textarea, select")) {
                            element.addEventListener("mouseenter", handleMouseEnter, { passive: true });
                            element.addEventListener("mouseleave", handleMouseLeave, { passive: true });
                        }
                    }
                });
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            // Restore default cursor
            document.body.style.cursor = 'auto';
            document.head.removeChild(style);
            
            window.removeEventListener("mousemove", throttledMouseMove);
            document.removeEventListener("mouseleave", () => setIsVisible(false));
            document.removeEventListener("mouseenter", () => setIsVisible(true));
            
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            
            observer.disconnect();
        };
    }, [updateMousePosition, handleMouseEnter, handleMouseLeave]);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: mousePosition.x - 8,
                    translateY: mousePosition.y - 8,
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
            
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-400/30 rounded-full pointer-events-none z-[9998]"
                style={{
                    translateX: mousePosition.x - 16,
                    translateY: mousePosition.y - 16,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.3,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                }}
            />
        </>
    );
};