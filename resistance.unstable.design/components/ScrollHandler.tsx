'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollHandler() {
    const pathname = usePathname();

    useEffect(() => {
        // Remove leading slash and use as section ID
        const sectionId = pathname.slice(1);

        if (sectionId) {
            // Delay to ensure DOM is ready, especially on initial page load
            const scrollToSection = () => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };

            // Try immediately, then with delays to handle different load scenarios
            scrollToSection();
            setTimeout(scrollToSection, 100);
            setTimeout(scrollToSection, 300);
        }
    }, [pathname]);

    return null;
}
