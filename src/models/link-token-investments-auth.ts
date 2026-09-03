import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenInvestmentsAuth = {
  manualEntryEnabled?: boolean | null;
  maskedNumberMatchEnabled?: boolean | null;
  statedAccountNumberEnabled?: boolean | null;
  rollover401KEnabled?: boolean | null;
};

export const linkTokenInvestmentsAuthSchema: Schema<LinkTokenInvestmentsAuth> =
  s.object<LinkTokenInvestmentsAuth>({
    manualEntryEnabled: s.optionalNullable(s.boolean()),
    maskedNumberMatchEnabled: s.optionalNullable(s.boolean()),
    statedAccountNumberEnabled: s.optionalNullable(s.boolean()),
    rollover401KEnabled: s.optionalNullable(s.boolean()),
    _keysMap: {
      manualEntryEnabled: "manual_entry_enabled",
      maskedNumberMatchEnabled: "masked_number_match_enabled",
      statedAccountNumberEnabled: "stated_account_number_enabled",
      rollover401KEnabled: "rollover_401k_enabled",
    },
  });
