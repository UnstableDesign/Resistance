'use client';

import { useState } from 'react';

interface ShowAnswersProps {
    children: React.ReactNode;
}

export default function ShowAnswers({ children }: ShowAnswersProps) {
    const [showAnswers, setShowAnswers] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowAnswers(!showAnswers)}
                className="my-6 px-4 py-2 bg-red text-white rounded hover:bg-red-700 transition-colors font-kyokasho"
            >
                {showAnswers ? 'Hide Answers' : 'Show Answers'}
            </button>

            {showAnswers && (
                <div className="answers text-black mt-4">
                    {children}
                </div>
            )}
        </div>
    );
}