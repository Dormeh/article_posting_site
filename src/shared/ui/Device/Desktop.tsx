import { FC, PropsWithChildren } from 'react';
import { MediaQuery } from 'react-responsive';
import { MIN_DESKTOP_WIDTH } from '../../model/consts/common';

export const Desktop: FC<PropsWithChildren> = ({ children }) => {
    return <MediaQuery minWidth={MIN_DESKTOP_WIDTH}>{children}</MediaQuery>;
};
