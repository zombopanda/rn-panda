import { enumKeys } from './helpers/functions';
import { Unpacked } from './types/types';

export const dev = process.env.NODE_ENV === 'development';

export const BASE_URL = 'https://api-acc.trackonline.com/';

export const MSAL_CLIENT_ID = 'd74bd063-fab8-4f0b-ba79-869f114ef482';
export const MSAL_AUTHORITY = 'https://TrackOnline.b2clogin.com/tfp/trackonline.onmicrosoft.com/B2C_1_returnz';
export const MSAL_SCOPES = ['https://trackonline.onmicrosoft.com/48ca3e86-7a55-4381-a079-0471bf9fc98a/api.access'];

export enum LocationType {
  Customer = 1,
  Carrier = 4,
  'Company location' = 5,
}

export enum LocationTabs {
  Customer = LocationType.Customer,
  Carrier = LocationType.Carrier,
}

export enum StatusType {
  New = 0,
  Planned = 5,
  Declined = 10,
  Shipped = 11,
  Confirmed = 16,
  Cancelled = 20,
  'In progress' = 30,
  Executed = 33,
  Processed = 35
}

export enum TypeCodeType {
  Order = 50,
  Collection = 55,
  Declare = 60,
}

export enum TabType {
  IN = TypeCodeType.Order,
  OUT = TypeCodeType.Declare,
}

export enum ItemType {
  Box = 2,
  Bulk = 10,
  Container = 4,
  Crate = 6,
  Interior = 3,
  Lid = 9,
  'Load carrier' = 5,
  'Locking plate' = 8,
  Other = 99,
  Pallet = 7,
  Tote = 11,
  Tray = 1,
  Unknown = 0
}

const locationTypes = enumKeys(LocationTabs);
export type LocationTypeKeys = Unpacked<typeof locationTypes>;

const itemTypes = enumKeys(ItemType);
export type ItemTypeKeys = Unpacked<typeof itemTypes>;
