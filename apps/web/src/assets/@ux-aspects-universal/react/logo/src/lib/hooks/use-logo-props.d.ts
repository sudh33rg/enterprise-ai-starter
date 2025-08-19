import { LogoProps } from '../interfaces/logo-props';
export interface UseLogoProps {
    titleId: string;
    getClipPathId: (id: string) => string;
    label?: string;
    logoProps: React.SVGProps<SVGSVGElement>;
    style: React.CSSProperties;
}
export declare function useLogoProps({ width, height, style, label, ...props }: LogoProps): UseLogoProps;
export default useLogoProps;
