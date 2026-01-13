"use client";

import { Suspense } from 'react';
import BetaDiffViewer from '@/components/diff/BetaDiffViewer';

export default function DiffPage() {
    return (
        <main>
            <Suspense fallback={<div>Loading options...</div>}>
                <BetaDiffViewer />
            </Suspense>
        </main>
    );
}
