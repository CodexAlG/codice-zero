import { useEffect, useRef } from 'react';

/**
 * Custom hook to dynamically update the document title based on selection.
 * @param {string|null} titlePart - The specific part to add to the title (e.g., Character Name).
 * @param {string} [defaultTitle='CodiceZero'] - The fallback title to return to when titlePart is null.
 */
export function useDynamicTitle(titlePart, defaultTitle = 'CodiceZero') {
    // Store the original title to restore it if needed, or to prepend/append to.
    // In a SPA navigation, document.title might change, so we might want to capture the "base" title.
    // However, for this requirement: "return to default if deselected", we can use a fixed default or capture it.

    useEffect(() => {
        // If there's a specific title part selected (e.g., "Miyabi")
        if (titlePart) {
            document.title = `${titlePart} | ${defaultTitle}`;
        } else {
            // Revert to default
            document.title = defaultTitle;
        }

        // Cleanup isn't strictly necessary if the component unmounts and we want to keep the title,
        // but often we want to revert to the previous title on unmount.
        // The requirement says "return to default title if deselected".
        // It doesn't explicitly say "on unmount", but it's good practice for a "tab title" hook.
        return () => {
            // Optional: Revert on unmount if desired, or let the next page handle it.
            // For now, we leave it as is to avoid flickering if navigating away.
            // But if we want to ensure "default" when component unmounts (leaving Beta Diff):
            if (!titlePart) {
                document.title = defaultTitle;
            }
        };
    }, [titlePart, defaultTitle]);

    return; // This hook doesn't need to return values
}
