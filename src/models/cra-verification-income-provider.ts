import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraVerificationIncomeProvider = {
  name: string;
  isNormalized: boolean;
};

export const craVerificationIncomeProviderSchema: Schema<CraVerificationIncomeProvider> =
  s.object<CraVerificationIncomeProvider>({
    name: s.string(),
    isNormalized: s.boolean(),
    _keysMap: {
      isNormalized: "is_normalized",
    },
  });
