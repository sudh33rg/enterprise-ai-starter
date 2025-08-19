import { Props } from '@ux-aspects-universal/react/utils';
import * as React from 'react';
import './multi-value-chip.scss';
export type MultiValueChipProps = Props<'div', {
    /** The label for the chip */
    label: string;
    /** The expanded state of the chip */
    isExpanded?: boolean;
    /** The selected values */
    values?: string[];
    /** The readonly state of the chip */
    isReadonly?: boolean;
    /** The disabled state of the chip */
    isDisabled?: boolean;
    /** Emits when the expanded state changes */
    onExpandedChange?: (expanded: boolean) => void;
    /** Emits when the selected values change */
    onValuesChange?: (values: string[]) => void;
}>;
export declare const MultiValueChip: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "label" | "isExpanded" | "values" | "isReadonly" | "isDisabled" | "onExpandedChange" | "onValuesChange"> & {
    /** The label for the chip */
    label: string;
    /** The expanded state of the chip */
    isExpanded?: boolean;
    /** The selected values */
    values?: string[];
    /** The readonly state of the chip */
    isReadonly?: boolean;
    /** The disabled state of the chip */
    isDisabled?: boolean;
    /** Emits when the expanded state changes */
    onExpandedChange?: (expanded: boolean) => void;
    /** Emits when the selected values change */
    onValuesChange?: (values: string[]) => void;
} & React.RefAttributes<HTMLDivElement>>;
