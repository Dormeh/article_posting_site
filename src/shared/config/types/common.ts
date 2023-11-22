export type CreateMutable<Type> = {
    [Property in keyof Type]+?: Type[Property];
};
