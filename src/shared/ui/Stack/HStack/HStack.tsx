import { Stack, StackProps } from '../Stack/Stack';

interface HStackProps extends Omit<StackProps, 'direction'> {
    className?: string;
}

export const HStack = (props: HStackProps) => {
    return <Stack {...props} direction="row" />;
};
