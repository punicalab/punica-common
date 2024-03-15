/**
 * Interface for defining a mapping between option attributes.
 */
export interface IOptionAttributeMapping {
  /**
   * The attribute representing the value of an option.
   */
  value: string;

  /**
   * The attribute representing the label of an option.
   */
  label: string;
}

/**
 * Interface for defining an option that can be selected.
 */
export interface IOption {
  /**
   * The label associated with the option.
   */
  label: string;

  /**
   * The value of the option.
   */
  value: unknown;

  /**
   * Indicates whether the option is set as default.
   */
  default?: boolean;

  /**
   * A description of the option.
   */
  description?: string;

  /**
   * Indicates whether the option is disabled.
   */
  disabled?: boolean;
}
