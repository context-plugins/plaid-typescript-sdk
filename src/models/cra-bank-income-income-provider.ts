import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraBankIncomeIncomeProvider = {
  name: string;
  isNormalized: boolean;
};

export const craBankIncomeIncomeProviderSchema: Schema<CraBankIncomeIncomeProvider> =
  s.object<CraBankIncomeIncomeProvider>({
    name: s.string(),
    isNormalized: s.boolean(),
    _keysMap: {
      isNormalized: "is_normalized",
    },
  });
