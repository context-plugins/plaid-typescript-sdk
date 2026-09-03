import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletSchema, type Wallet } from "./wallet.js";

export type WalletListResponse = {
  wallets: Wallet[];
  nextCursor?: string;
  requestId: string;
};

export const walletListResponseSchema: Schema<WalletListResponse> = s.object<WalletListResponse>({
  wallets: s.array(s.lazy(() => walletSchema)),
  nextCursor: s.optional(s.string()),
  requestId: s.string(),
  _keysMap: {
    nextCursor: "next_cursor",
    requestId: "request_id",
  },
});
