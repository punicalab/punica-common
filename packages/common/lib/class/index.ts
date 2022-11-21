export abstract class BaseListener<T> {
  private listeners;

  /**
   *
   */
  constructor() {
    this.listeners = new Map();
  }

  /**
   *
   * @param label
   * @param callback
   */
  on(label: T, callback: EventHandler) {
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }

  /**
   *
   * @param label
   * @param callback
   */
  off(label: T, callback: EventHandler) {
    const listeners = this.listeners.get(label);

    this.listeners.set(
      label,
      listeners.filter((c: EventHandler) => {
        return c != callback;
      })
    );
  }

  /**
   *
   * @param label
   * @param data
   */
  trigger(label: T, data: unknown) {
    const listeners = this.listeners.get(label);

    if (listeners) {
      listeners.forEach((callback: EventHandler) => {
        callback(data);
      });
    }
  }
}

export type EventHandler<TData = unknown> = (data: TData) => void;
