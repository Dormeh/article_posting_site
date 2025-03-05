import { useEffect, useRef, useState } from 'react';

export const useModalOpeningHandler = (isOpen: boolean, animationDelay = 200) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            // Отложенный запуск анимации, чтобы дать время на монтирование
            timeRef.current = setTimeout(() => {
                setIsOpening(true);
            }, animationDelay);
        } else {
            setIsOpening(false);
        }

        return () => {
            clearTimeout(timeRef.current);
        };
    }, [animationDelay, isOpen]);

    return { isMounted, isOpening };
};
