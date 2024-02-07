export interface TabOption {
    value: string;
    label: string;
}

export interface TabsConfig {
    name: string;
    defaultCheckedValue: string;
    tabOptions: TabOption[]
}
