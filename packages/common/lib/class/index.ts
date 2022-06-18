export abstract class BaseListener {
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
  on(label: string, callback: (data: unknown) => void) {
    this.listeners.has(label) || this.listeners.set(label, []);
    this.listeners.get(label).push(callback);
  }

  /**
   *
   * @param label
   * @param callback
   */
  off(label: string, callback: (data: unknown) => void) {
    const listeners = this.listeners.get(label);

    this.listeners.set(
      label,
      listeners.filter((c: (data: unknown) => void) => {
        return c != callback;
      })
    );
  }

  /**
   *
   * @param label
   * @param data
   */
  trigger(label: string, data: unknown) {
    const listeners = this.listeners.get(label);

    if (listeners) {
      listeners.forEach((callback: (data: unknown) => void) => {
        callback(data);
      });
    }
  }
}
