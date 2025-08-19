import { FC } from 'react';
export declare const IconList: FC<IconListProps>;
export interface IconListProps {
    icons: Record<string, FC>;
    library: string;
    aliases?: Record<string, string>;
    size?: string;
    mirror?: boolean;
    label?: string;
    role?: string;
    onSearch?: (search: string) => void;
}
