export interface DateCell<TDateTime> {
    key: string;
    date: TDateTime;
}
export declare function useWeeks<TDateTime>(): DateCell<TDateTime>[][];
