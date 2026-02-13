'use client';

import { useEffect, useState } from 'react';

interface Section {
    id: string;
    label: string;
    type: 'full' | 'part';
}

const sections: Section[] = [
    { id: 'home', label: 'Home', type: 'full' },
    { id: 'title-page', label: 'Title', type: 'full' },
    { id: 'resistance', label: 'Resistance', type: 'full' },
    { id: 'what-the-warp-remembers', label: 'Warp Remembers', type: 'full' },
    { id: 'on-designing-a-warp', label: 'Designing Warp', type: 'full' },
    { id: 'on-sectionally-warping', label: 'Sectionally Warping', type: 'full' },
    { id: 'wind-the-spools', label: 'Wind the spools', type: 'part' },
    { id: 'set-up-the-tension-box', label: 'Set up the tension box', type: 'part' },
    { id: 'set-up-your-back-beam', label: 'Set up your back beam', type: 'part' },
    { id: 'begin-beaming', label: 'Begin Beaming', type: 'part' },
    { id: 'make-the-cross', label: 'Make the Cross', type: 'part' },
    { id: 'cut-off-and-repeat', label: 'Cut off and repeat', type: 'part' },
    { id: 'troubles', label: 'Troubles', type: 'part' },
    { id: 'on-designing-with-adacad', label: 'On Designing with AdaCAD', type: 'full' },
    { id: 'on-designing-templates-for-photoshop', label: 'On Designing Templates for Photoshop', type: 'full' },
];

export default function ScrollProgressIndicator() {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-4">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => handleClick(section.id)}

                    className={`w-3 ${section.type === 'full' ? 'h-12' : 'h-3'} transition-all duration-300 ${activeSection === section.id
                        ? 'bg-red scale-110'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    aria-label={`Scroll to ${section.label}`}
                />
            ))}
        </div>
    );
}