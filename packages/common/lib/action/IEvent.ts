export interface IEvent {
  type: string;
  method: (data: any) => Promise<any>;
}
