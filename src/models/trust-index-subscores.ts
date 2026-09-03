import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustIndexSubscoreSchema, type TrustIndexSubscore } from "./trust-index-subscore.js";

export type TrustIndexSubscores = {
  deviceAndConnection?: TrustIndexSubscore | null;
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
