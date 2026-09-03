import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankTransferNetwork = {
  Ach: "ach",
  SameDayAch: "same-day-ach",
  Wire: "wire",
} as const;
export type BankTransferNetwork =
  | (typeof BankTransferNetwork)[keyof typeof BankTransferNetwork]
  | (string & {});

export const bankTransferNetworkSchema: EnumSchema<BankTransferNetwork> =
  s.enumOf<BankTransferNetwork>(BankTransferNetwork);
