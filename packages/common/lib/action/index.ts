/**
 * Interface for defining an event that triggers a specific action.
 */
export interface IEvent {
  /**
   * The type of the event.
   */
  type: string;

  /**
   * The method to be executed when the event is triggered.
   * @param data Data associated with the event.
   * @returns A promise that resolves with the result of the action.
   */
  method: (data: any) => Promise<any>;
}

/**
 * Interface for defining an action that can be performed.
 */
export interface IAction {
  /**
   * An array of events that trigger the action.
   */
  on?: IEvent[];

  /**
   * The label of the action, which can be either a string or a function returning a string.
   */
  label?: string | (() => string);

  /**
   * The value associated with the action.
   */
  value?: any;

  /**
   * A function that determines whether the action should be hidden based on the provided data.
   * @param data Data associated with the action.
   * @returns A boolean indicating whether the action should be hidden.
   */
  hide?: (data: any) => boolean;

  /**
   * A function that determines whether the action should be disabled based on the provided data.
   * @param data Data associated with the action.
   * @returns A boolean indicating whether the action should be disabled.
   */
  disable?: (data: any) => boolean;
}
