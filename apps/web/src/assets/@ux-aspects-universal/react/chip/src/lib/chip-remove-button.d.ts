import { Modality } from '@react-aria/interactions';
import { FC } from 'react';
interface ChipRemoveButtonProps {
    size?: 'medium' | 'large';
    onRemove?: (modality: Modality) => void;
}
export declare const ChipRemoveButton: FC<ChipRemoveButtonProps>;
export {};
