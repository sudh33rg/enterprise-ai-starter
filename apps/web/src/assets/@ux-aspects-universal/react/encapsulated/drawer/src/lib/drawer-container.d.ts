import { FC, HTMLAttributes, ReactNode } from 'react';
import './drawer-container.scss';
export type DrawerContainerOwnProps = {
    /** Where the drawer is placed inside the drawer container. */
    drawer?: ReactNode;
};
export type DrawerContainerProps = DrawerContainerOwnProps & HTMLAttributes<HTMLDivElement>;
export declare const DrawerContainer: FC<DrawerContainerProps>;
