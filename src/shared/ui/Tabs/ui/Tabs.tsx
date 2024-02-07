import { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TabsConfig } from 'shared/ui/Tabs/model/types/tabsType';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { TabInput } from 'shared/ui/RadioInput/TabInput';
import { UseFormRegister } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import cls from './Tabs.module.scss';

interface TabsProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
    tabsConfig: TabsConfig;
    register?: UseFormRegister<FieldValues>;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabsConfig: {
            defaultCheckedValue,
            name,
            tabOptions,
        },
        register,
        readOnly,
    } = props;
    const { t } = useTranslation();

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
                    defaultValue={defaultCheckedValue || 'default'}
                    // defaultChecked={value === defaultCheckedValue}
                    readOnly={readOnly}
                />
            ))}
        </div>
    );
});
