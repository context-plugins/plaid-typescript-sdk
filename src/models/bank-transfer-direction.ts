import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankTransferDirection = {
  Outbound: "outbound",
  Inbound: "inbound",
} as const;
export type BankTransferDirection =
  | (typeof BankTransferDirection)[keyof typeof BankTransferDirection]
  | (string & {});

export const bankTransferDirectionSchema: EnumSchema<BankTransferDirection> =
  s.enumOf<BankTransferDirection>(BankTransferDirection);
