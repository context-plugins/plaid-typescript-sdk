import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionSuccessMetadataInstitutionSchema,
  type LinkSessionSuccessMetadataInstitution,
} from "./link-session-success-metadata-institution.js";

/** The details of a digital payroll income verification in Link. */
export type LinkSessionPayrollIncomeResult = {
  /** The number of paystubs retrieved from a payroll provider. */
  numPaystubsRetrieved: number;
  /** The number of W-2s retrieved from a payroll provider. */
  numW2SRetrieved: number;
  /**
   * An institution object. If the Item was created via Same-Day or Instant micro-deposit
   * verification, will be `null`.
   */
  institution: LinkSessionSuccessMetadataInstitution | null;
};

export const linkSessionPayrollIncomeResultSchema: Schema<LinkSessionPayrollIncomeResult> =
  s.object<LinkSessionPayrollIncomeResult>({
    numPaystubsRetrieved: s.int(),
    numW2SRetrieved: s.int(),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      numPaystubsRetrieved: "num_paystubs_retrieved",
      numW2SRetrieved: "num_w2s_retrieved",
    },
  });
