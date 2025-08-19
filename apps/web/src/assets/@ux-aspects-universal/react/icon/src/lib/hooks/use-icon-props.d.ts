import { IconProps } from '../interfaces/icon-props';
export interface UseIconProps {
    titleId: string;
    getId: (id: string) => string;
    label?: string;
    iconProps: React.SVGProps<SVGSVGElement>;
    style: React.CSSProperties;
}
export declare function useIconProps({ size, mirror, style, label, role, mirrorInRtl, ...props }: IconProps): UseIconProps;
export default useIconProps;
