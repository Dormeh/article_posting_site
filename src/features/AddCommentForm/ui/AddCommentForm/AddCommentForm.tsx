import { ForwardedRef, forwardRef, memo, useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Textarea } from 'shared/ui/Textarea/Textarea';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Form, FormOrientation } from 'shared/ui/Form/ui/Form';
import { ValidationType } from 'shared/config/validation/validation';
import { VStack } from 'shared/ui/Stack';

export interface AddCommentFormProps {
    className?: string;
    onSubmit: (text: FieldValues) => void;
    formError?: string;
    formTitle?: string;
}

const AddCommentForm = forwardRef(
    (props: AddCommentFormProps, ref: ForwardedRef<HTMLFormElement>) => {
        const { className, formError, onSubmit, formTitle } = props;

        const { t } = useTranslation();

        const {
            control,
            handleSubmit,
            reset,
            formState: { errors, isDirty, isValid, isSubmitting },
            setFocus,
            clearErrors,
        } = useForm<FieldValues>({
            mode: 'onSubmit',
            defaultValues: {
                text: '',
            },
        });

        const onSubmitHandler = useCallback(
            ({ text }) => {
                onSubmit(text);
                reset();
                setFocus('text');
            },
            [onSubmit, reset, setFocus],
        );

        const onCancelEdit = useCallback(() => {
            reset();
        }, [reset]);

        const footer = (
            <VStack justify="start" max={false} gap={10}>
                <Button
                    type="submit"
                    theme={ButtonTheme.OUTLINE}
                    disabled={!isDirty || isSubmitting}
                    onClick={handleSubmit(onSubmitHandler)}
                >
                    {t('Отправить')}
                </Button>
                {isDirty && !isSubmitting && (
                    <Button
                        type="button"
                        theme={ButtonTheme.OUTLINE_INVERTED}
                        onClick={onCancelEdit}
                    >
                        {t('Отчистить')}
                    </Button>
                )}
            </VStack>
        );

        return (
            <Form
                ref={ref}
                formTitle={formTitle}
                fields={[
                    {
                        name: 'text',
                        type: 'text',
                        placeholder: t('Напишите ваш комментарий'),
                        pattern: ValidationType.Comment,
                        Component: Textarea,
                    },
                ]}
                footer={footer}
                className={classNames('', {}, [className])}
                control={control}
                errors={errors}
                orientation={FormOrientation.ROW}
                formError={formError}
            />
        );
    },
);

export default memo(AddCommentForm);
