import { InputHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabsConfig } from 'shared/ui/Tabs/model/types/tabsType';
import { TabInput } from 'shared/ui/TabInput/TabInput';
import { UseFormRegister } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import cls from './Tabs.module.scss';

interface TabsProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    tabsConfig: TabsConfig;
    register?: UseFormRegister<FieldValues>;
}

export const Tabs = (props: TabsProps) => {
    const {
        className,
        tabsConfig: {
            defaultCheckedValue,
            name,
            tabOptions,
        },
        register,
        readOnly,
        onChange,
    } = props;

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabOptions.map(({ value, label }, index) => (
                <TabInput
                    name={name}
                    register={register}
                    value={value}
                    label={label || value}
                    key={value}
                    id={index.toString()}
                    // defaultValue={defaultCheckedValue || 'default'}
                    defaultChecked={value === defaultCheckedValue}
                    readOnly={readOnly}
                />
            ))}
        </div>
    );
};
