import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ContentView } from 'shared/model/types/types';
import cls from './SelectContentPreview.module.scss';

export interface SelectContentPreviewType {
    view: ContentView;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface SelectContentPreviewProps {
    className?: string;
    selects: SelectContentPreviewType[];
    onSelect?: (newView: ContentView) => void;
    view: ContentView;
}

export const SelectContentPreview = memo((props: SelectContentPreviewProps) => {
    const {
        className,
        selects,
        onSelect,
        view,
    } = props;

    const onClick = (newView: ContentView) => () => {
        onSelect?.(newView);
    };

    return (
        <div className={classNames(cls.SelectPageTypePreview, {}, [className])}>
            {selects.map(({ Icon, view: viewType }) => (
                <Button key={viewType} className={cls.btn} onClick={onClick(viewType)} theme={ButtonTheme.CLEAR}>
                    <Icon className={classNames(cls.icon, { [cls.selected]: viewType === view })} />
                </Button>
            ))}
        </div>
    );
});
