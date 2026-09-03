import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountVerificationInsightsPreviousReturns = {
  hasPreviousAdministrativeReturn: boolean;
};

export const accountVerificationInsightsPreviousReturnsSchema: Schema<AccountVerificationInsightsPreviousReturns> =
  s.object<AccountVerificationInsightsPreviousReturns>({
    hasPreviousAdministrativeReturn: s.boolean(),
    _keysMap: {
      hasPreviousAdministrativeReturn: "has_previous_administrative_return",
    },
  });
