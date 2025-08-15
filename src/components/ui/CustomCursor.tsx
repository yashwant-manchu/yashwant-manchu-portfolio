"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Throttled mouse position update for better performance
    const updateMousePosition = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    const handleMouseEnter = useCallback(() => setIsHovering(true), []);
    const handleMouseLeave = useCallback(() => setIsHovering(false), []);

    useEffect(() => {
        // Check if device supports hover (not touch devices)
        const supportsHover = window.matchMedia('(hover: hover)').matches;
        if (!supportsHover) return;

        // Throttle mouse move events for performance
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

        // Add event listeners
        window.addEventListener("mousemove", throttledMouseMove, { passive: true });
        
        // Mouse leave/enter for visibility
        document.addEventListener("mouseleave", () => setIsVisible(false));
        document.addEventListener("mouseenter", () => setIsVisible(true));

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            "a, button, .cursor-hover, [role='button'], input, textarea, select"
        );
        
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter, { passive: true });
            el.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        });

        // Observer for dynamically added elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
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

    // Don't render on touch devices or if not visible
    const supportsHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
    if (!supportsHover || !isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: mousePosition.x - 6,
                    translateY: mousePosition.y - 6,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />
            
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-2 border-blue-400/30 rounded-full pointer-events-none z-[9998]"
                style={{
                    translateX: mousePosition.x - 12,
                    translateY: mousePosition.y - 12,
                }}
                animate={{
                    scale: isHovering ? 1.2 : 1,
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