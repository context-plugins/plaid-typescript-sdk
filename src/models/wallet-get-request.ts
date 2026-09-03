import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletGetRequest = {
  clientId?: string;
  secret?: string;
  walletId: string;
};

export const walletGetRequestSchema: Schema<WalletGetRequest> = s.object<WalletGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  walletId: s.string(),
  _keysMap: {
    clientId: "client_id",
    walletId: "wallet_id",
  },
});
