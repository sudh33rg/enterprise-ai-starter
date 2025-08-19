import { RefObject } from 'react';
import { SelectProps } from '../select';
export interface UseSelectOptionNavigator {
    navigatorProps: {
        'aria-activedescendant'?: string;
        onKeyDown?: (event: React.KeyboardEvent) => void;
    };
    selectProps: Pick<SelectProps<unknown>, 'controllerRef'>;
}
export declare function useSelectOptionNavigator<T extends HTMLElement>(ref: RefObject<T>): UseSelectOptionNavigator;
