'use client';

import { CustomCursor } from '@/components/ui/CustomCursor';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
    return (
        <>
            <CustomCursor />
            <Navigation />
            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <SkillsSection />
                {/* ProjectsSection hidden per request */}
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
