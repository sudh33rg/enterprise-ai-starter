import { Modality } from '@react-aria/interactions';
import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './chip.scss';
export type ChipProps = Props<'span', {
    /** The size of the chip. */
    size?: 'medium' | 'large';
    /** Whether the chip can be selected. */
    isSelectable?: boolean;
    /** Whether the chip is disabled. */
    isDisabled?: boolean;
    /** Whether the chip is readonly. */
    isReadonly?: boolean;
    /** Whether the chip is selected. */
    isSelected?: boolean;
    /** Emitted when the user selects the chip. */
    onSelectedChange?: (selected: boolean) => void;
    /** Whether the chip can be removed. */
    isRemovable?: boolean;
    /** Emitted when the user removes the chip. */
    onRemove?: (modality: Modality) => void;
    /** Icon, avatar or color tag to display in the chip. */
    icon?: React.ReactNode;
}>;
export declare const Chip: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref">, "size" | "isSelectable" | "isDisabled" | "isReadonly" | "isSelected" | "onSelectedChange" | "isRemovable" | "onRemove" | "icon"> & {
    /** The size of the chip. */
    size?: "medium" | "large";
    /** Whether the chip can be selected. */
    isSelectable?: boolean;
    /** Whether the chip is disabled. */
    isDisabled?: boolean;
    /** Whether the chip is readonly. */
    isReadonly?: boolean;
    /** Whether the chip is selected. */
    isSelected?: boolean;
    /** Emitted when the user selects the chip. */
    onSelectedChange?: (selected: boolean) => void;
    /** Whether the chip can be removed. */
    isRemovable?: boolean;
    /** Emitted when the user removes the chip. */
    onRemove?: (modality: Modality) => void;
    /** Icon, avatar or color tag to display in the chip. */
    icon?: React.ReactNode;
} & React.RefAttributes<HTMLSpanElement>>;
