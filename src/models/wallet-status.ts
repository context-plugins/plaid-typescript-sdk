import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the wallet.
 *
 * `UNKNOWN`: The wallet status is unknown.
 *
 * `ACTIVE`: The wallet is active and ready to send money to and receive money from.
 *
 * `CLOSED`: The wallet is closed. Any transactions made to or from this wallet will error.
 */
export const WalletStatus = {
  Unknown: "UNKNOWN",
  Active: "ACTIVE",
  Closed: "CLOSED",
} as const;
export type WalletStatus = (typeof WalletStatus)[keyof typeof WalletStatus] | (string & {});

export const walletStatusSchema: EnumSchema<WalletStatus> = s.enumOf<WalletStatus>(WalletStatus);
