import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletSchema, type Wallet } from "./wallet.js";

/** WalletListResponse defines the response schema for `/wallet/list` */
export type WalletListResponse = {
  /** An array of e-wallets */
  wallets: Wallet[];
  /**
   * Cursor used for fetching e-wallets created before the latest e-wallet provided in this response
   */
  nextCursor?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
