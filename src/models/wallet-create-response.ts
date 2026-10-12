import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletBalanceSchema, type WalletBalance } from "./wallet-balance.js";
import { walletNumbersSchema, type WalletNumbers } from "./wallet-numbers.js";
import { walletStatusSchema, type WalletStatus } from "./wallet-status.js";

/** WalletCreateResponse defines the response schema for `/wallet/create` */
export type WalletCreateResponse = {
  /** A unique ID identifying the e-wallet */
  walletId: string;
  /** An object representing the e-wallet balance */
  balance: WalletBalance;
  /** An object representing the e-wallet account numbers */
  numbers: WalletNumbers;
  /** The ID of the recipient that corresponds to the e-wallet account numbers */
  recipientId?: string;
  /**
   * The status of the wallet.
   *
   * `UNKNOWN`: The wallet status is unknown.
   *
   * `ACTIVE`: The wallet is active and ready to send money to and receive money from.
   *
   * `CLOSED`: The wallet is closed. Any transactions made to or from this wallet will error.
   */
  status: WalletStatus;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const walletCreateResponseSchema: Schema<WalletCreateResponse> = s.object<WalletCreateResponse>({
  walletId: s.string(),
  balance: walletBalanceSchema,
  numbers: walletNumbersSchema,
  recipientId: s.optional(s.string()),
  status: walletStatusSchema,
  requestId: s.string(),
  _keysMap: {
    walletId: "wallet_id",
    recipientId: "recipient_id",
    requestId: "request_id",
  },
});
