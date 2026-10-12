import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about known ACH returns for the account and routing number. */
export type AccountVerificationInsightsPreviousReturns = {
  /**
   * Indicates whether Plaid's data sources include a known administrative ACH return for this
   * account and routing number.
   */
  hasPreviousAdministrativeReturn: boolean;
};

export const accountVerificationInsightsPreviousReturnsSchema: Schema<AccountVerificationInsightsPreviousReturns> =
  s.object<AccountVerificationInsightsPreviousReturns>({
    hasPreviousAdministrativeReturn: s.boolean(),
    _keysMap: {
      hasPreviousAdministrativeReturn: "has_previous_administrative_return",
    },
  });
