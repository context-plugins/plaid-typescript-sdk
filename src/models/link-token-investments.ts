import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenInvestments = {
  allowUnverifiedCryptoWallets?: boolean;
  allowManualEntry?: boolean;
};

export const linkTokenInvestmentsSchema: Schema<LinkTokenInvestments> = s.object<LinkTokenInvestments>({
  allowUnverifiedCryptoWallets: s.optional(s.boolean()),
  allowManualEntry: s.optional(s.boolean()),
  _keysMap: {
    allowUnverifiedCryptoWallets: "allow_unverified_crypto_wallets",
    allowManualEntry: "allow_manual_entry",
  },
});
