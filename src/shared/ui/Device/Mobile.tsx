import { FC, PropsWithChildren } from 'react';
import { MediaQuery } from 'react-responsive';
import { MAX_MOBILE_WIDTH } from '../../model/consts/common';

export const Mobile: FC<PropsWithChildren> = ({ children }) => {
    return <MediaQuery maxWidth={MAX_MOBILE_WIDTH}>{children}</MediaQuery>;
};
