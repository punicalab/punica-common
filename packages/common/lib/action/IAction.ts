import { IEvent } from './IEvent';

export interface IAction {
  on?: Array<IEvent>;
  label?: string | (() => string);
  value?: any;
  hide?: (data: any) => boolean;
  disable?: (data: any) => boolean;
}
