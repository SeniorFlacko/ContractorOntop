import { statusType } from './status-tag.model';

export interface Contractor {
  name: string;
  image: string;
  type: string;
  startDate: Date;
  amount: number;
  status: statusType;
}
