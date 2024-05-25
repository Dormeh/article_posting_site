import { Stack, StackProps } from '../Stack/Stack';

interface VStackProps extends Omit<StackProps, 'direction'> {
    className?: string;
}

export const VStack = (props: VStackProps) => {
    return <Stack {...props} direction="column" />;
};
