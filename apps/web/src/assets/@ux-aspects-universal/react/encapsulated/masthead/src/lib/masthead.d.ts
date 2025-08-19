import { FC, HTMLProps, ReactNode } from 'react';
import './masthead.scss';
export interface MastheadOwnProps {
    /** Content to render in the icon slot of the masthead. */
    icon?: ReactNode;
    /** Content to render in the tabs slot of the masthead. */
    tabs?: ReactNode | ReactNode[];
    /** Content to render in the actions slot of the masthead. */
    actions?: ReactNode | ReactNode[];
    /** Content to render in the title slot of the masthead. */
    title?: ReactNode;
    /** Content to render in the breadcrumbs slot of the masthead. */
    breadcrumbs?: ReactNode;
    /** Content to render in the menuButton slot of the masthead. */
    menuButton?: ReactNode;
    /** Content to render in the logo slot of the masthead. */
    logo?: ReactNode;
    /** Content to render in the module slot of the masthead. */
    module?: ReactNode;
    /** Content to render in the avatar slot of the masthead. */
    avatar?: ReactNode;
    /** Content to render in the my aviator slot of the masthead. */
    myAviator?: ReactNode;
}
export type MastheadProps = MastheadOwnProps & Omit<HTMLProps<HTMLDivElement>, keyof MastheadOwnProps>;
export declare const Masthead: FC<MastheadProps>;
