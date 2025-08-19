/** Localizable strings for the Time Picker component. */
export declare abstract class UxaTimePickerI18n {
    /** The aria-label applied to the hour input. */
    hourPickerAriaLabel?: string;
    /** The aria-label applied to the minute input. */
    minutePickerAriaLabel?: string;
    /** The aria-label applied to the second input. */
    secondPickerAriaLabel?: string;
    /** The aria-label applied to the time offset input. */
    offsetPickerAriaLabel?: string;
}
export declare class UxaDefaultTimePickerI18n extends UxaTimePickerI18n {
    hourPickerAriaLabel: string;
    minutePickerAriaLabel: string;
    secondPickerAriaLabel: string;
    offsetPickerAriaLabel: string;
}
