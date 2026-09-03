import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detectedAccountSchema, type DetectedAccount } from "./detected-account.js";

export type FinancialInstitutionInsights = {
  name: string;
  entityId?: string | null;
  website: string | null;
  detectedAccounts: DetectedAccount[];
};

export const financialInstitutionInsightsSchema: Schema<FinancialInstitutionInsights> =
  s.object<FinancialInstitutionInsights>({
    name: s.string(),
    entityId: s.optionalNullable(s.string()),
    website: s.nullable(s.string()),
    detectedAccounts: s.array(s.lazy(() => detectedAccountSchema)),
    _keysMap: {
      entityId: "entity_id",
      detectedAccounts: "detected_accounts",
    },
  });
