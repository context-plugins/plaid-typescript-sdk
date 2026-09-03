import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WalletStatus = {
  Unknown: "UNKNOWN",
  Active: "ACTIVE",
  Closed: "CLOSED",
} as const;
export type WalletStatus = (typeof WalletStatus)[keyof typeof WalletStatus] | (string & {});

export const walletStatusSchema: EnumSchema<WalletStatus> = s.enumOf<WalletStatus>(WalletStatus);
