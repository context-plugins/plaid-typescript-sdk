import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletBalanceSchema, type WalletBalance } from "./wallet-balance.js";
import { walletNumbersSchema, type WalletNumbers } from "./wallet-numbers.js";
import { walletStatusSchema, type WalletStatus } from "./wallet-status.js";

export type WalletCreateResponse = {
  walletId: string;
  balance: WalletBalance;
  numbers: WalletNumbers;
  recipientId?: string;
  status: WalletStatus;
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
