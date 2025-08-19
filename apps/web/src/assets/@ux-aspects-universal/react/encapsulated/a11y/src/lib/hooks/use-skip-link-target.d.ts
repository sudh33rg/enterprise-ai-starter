interface SkipLinkTargetProps {
    tabIndex: number;
}
interface SkipLinkTargetOptions {
    tabIndex?: number;
}
export declare function useSkipLinkTarget(ref: React.RefObject<HTMLElement>, { tabIndex }?: SkipLinkTargetOptions): SkipLinkTargetProps;
export {};
