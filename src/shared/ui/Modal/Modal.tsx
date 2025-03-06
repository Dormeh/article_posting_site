import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { useModalOpeningHandler } from './lib/hooks/useModalOpeningHandler';
import { useModalClosingHandler } from './lib/hooks/useModalClosingHandler';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_CLOSE_DELAY = 250;
const ANIMATION_OPEN_DELAY = 100;

export const Modal = (props: ModalProps) => {
    const { className, isOpen, onClose, lazy, children } = props;

    const { closeHandler, isClosing } = useModalClosingHandler(
        isOpen,
        onClose,
        ANIMATION_CLOSE_DELAY,
    );
    const { isMounted, isOpening } = useModalOpeningHandler(isOpen, ANIMATION_OPEN_DELAY);

    const mods: Mods = {
        [cls.opened]: isOpening && isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
