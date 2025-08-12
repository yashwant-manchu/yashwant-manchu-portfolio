"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners
        window.addEventListener("mousemove", updateMousePosition);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            "a, button, .cursor-hover"
        );
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    translateX: mousePosition.x - 8,
                    translateY: mousePosition.y - 8,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-400/30 rounded-full pointer-events-none z-40"
                style={{
                    translateX: mousePosition.x - 16,
                    translateY: mousePosition.y - 16,
                }}
                animate={{
                    scale: isHovering ? 1.2 : 1,
                    opacity: isHovering ? 0.8 : 0.3,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                }}
            />
        </>
    );
};
