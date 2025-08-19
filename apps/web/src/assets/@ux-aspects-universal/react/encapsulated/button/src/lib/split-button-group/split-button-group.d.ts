import { FC, ReactElement } from 'react';
import type { ButtonProps } from '../button/button';
import type { IconButtonProps } from '../icon-button/icon-button';
import './split-button-group.scss';
type SplitButtonChildren = ReactElement<ButtonProps> | ReactElement<IconButtonProps>;
export interface SplitButtonGroupProps {
    /** The color variant of the buttons within the group. */
    variant: 'primary' | 'secondary';
    /** The size of the buttons within the group. */
    size?: 'small' | 'medium' | 'large';
    /** Whether the buttons within the group should be flat. */
    isFlat?: boolean;
    /** Whether the buttons should be disabled. */
    isDisabled?: boolean;
    children?: SplitButtonChildren | SplitButtonChildren[];
}
export declare const SplitButtonGroup: FC<SplitButtonGroupProps>;
export {};
