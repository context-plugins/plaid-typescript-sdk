import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The object containing data about the income provider. */
export type CraBankIncomeIncomeProvider = {
  /** The name of the income provider. */
  name: string;
  /**
   * Indicates whether the income provider name is normalized by comparing it against a canonical
   * set of known providers.
   */
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
