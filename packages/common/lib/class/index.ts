export abstract class BaseListener<T> {
  private listeners: Map<T, Array<EventHandler>> = new Map();

  /**
   * BaseListener constructor initializes the listeners map.
   */
  constructor() {}

  /**
   * Adds a callback function to the specified event type.
   * @param eventType The type of event to listen for.
   * @param callback The callback function to be invoked when the event occurs.
   */
  on(eventType: T, callback: EventHandler) {
    // Retrieve the array of listeners for the specified event type or create a new one if it doesn't exist
    const eventListeners = this.listeners.get(eventType) || [];
    // Add the callback function to the array of listeners
    eventListeners.push(callback);
    // Update the listeners map with the new array of listeners
    this.listeners.set(eventType, eventListeners);
  }

  /**
   * Removes a callback function from the specified event type.
   * @param eventType The type of event to remove the callback from.
   * @param callback The callback function to remove.
   */
  off(eventType: T, callback: EventHandler) {
    // Retrieve the array of listeners for the specified event type
    const eventListeners = this.listeners.get(eventType);
    // If there are listeners for the event type, filter out the callback function to be removed
    if (eventListeners) {
      this.listeners.set(
        eventType,
        eventListeners.filter((listener) => listener !== callback)
      );
    }
  }

  /**
   * Triggers the specified event by invoking all associated callback functions.
   * @param eventType The type of event to trigger.
   * @param data The data to pass to the callback functions.
   */
  trigger(eventType: T, data: unknown) {
    // Retrieve the array of listeners for the specified event type
    const eventListeners = this.listeners.get(eventType);
    // If there are listeners for the event type, invoke each callback function with the provided data
    if (eventListeners) {
      eventListeners.forEach((callback) => callback(data));
    }
  }
}

// Type definition for event handler functions
export type EventHandler<TData = unknown> = (data: TData) => void;
