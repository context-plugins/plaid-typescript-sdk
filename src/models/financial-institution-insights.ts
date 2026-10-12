import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detectedAccountSchema, type DetectedAccount } from "./detected-account.js";

/** Insights surrounding external financial institution counterparties associated with a user. */
export type FinancialInstitutionInsights = {
  /** Name of the financial institution counterparty. */
  name: string;
  /** A unique, stable, Plaid-generated id that maps to the counterparty. */
  entityId?: string | null;
  /** The website associated with the counterparty. */
  website: string | null;
  /** Associated accounts, detected based on the nature of transfers to/from this institution. */
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
