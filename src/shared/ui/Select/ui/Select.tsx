import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import ReactSelect from 'react-select';
import { CustomSelectProps } from '../model/types/types';
import './Select.scss';

export interface SelectProps extends CustomSelectProps
    {
        className?: string
    }
export const Select = (props: SelectProps) => {
    const {
        className,
        ...otherProps
    } = props;
    const { t } = useTranslation();
    return (
        // <Controller render={} name={}
        <ReactSelect
            className={classNames('Select', {}, [className])}
            classNamePrefix="Select"
            {...otherProps}
        />
    );
};
