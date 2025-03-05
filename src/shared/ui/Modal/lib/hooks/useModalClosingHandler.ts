import { useEffect, useCallback, useRef, useState } from 'react';

export const useModalClosingHandler = (
    isOpen: boolean,
    onClose?: () => void,
    animationDelay = 200,
) => {
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState(false);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = 'initial';
            clearTimeout(timeRef.current);
        };
    }, [isOpen, onKeyDown]);

    return { closeHandler, isClosing };
};
