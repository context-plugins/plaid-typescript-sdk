import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSubscoreSchema, type TrustIndexSubscore } from "./trust-index-subscore.js";

/** Contains sub-score metadata. */
export type TrustIndexSubscores = {
  /** Represents Trust Index Subscore. */
  deviceAndConnection?: TrustIndexSubscore | null;
  /** Represents Trust Index Subscore. */
  bankAccountInsights?: TrustIndexSubscore | null;
};

export const trustIndexSubscoresSchema: Schema<TrustIndexSubscores> = s.object<TrustIndexSubscores>({
  deviceAndConnection: s.optionalNullable(s.lazy(() => trustIndexSubscoreSchema)),
  bankAccountInsights: s.optionalNullable(s.lazy(() => trustIndexSubscoreSchema)),
  _keysMap: {
    deviceAndConnection: "device_and_connection",
    bankAccountInsights: "bank_account_insights",
  },
});
