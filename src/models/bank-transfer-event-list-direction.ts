import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the direction of the transfer: `outbound`: for API-initiated transfers `inbound`: for
 * payments received by the FBO account.
 */
export const BankTransferEventListDirection = {
  Inbound: "inbound",
  Outbound: "outbound",
} as const;
export type BankTransferEventListDirection =
  | (typeof BankTransferEventListDirection)[keyof typeof BankTransferEventListDirection]
  | (string & {});

export const bankTransferEventListDirectionSchema: EnumSchema<BankTransferEventListDirection> =
  s.enumOf<BankTransferEventListDirection>(BankTransferEventListDirection);
