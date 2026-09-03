import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkSessionSuccessMetadataInstitutionSchema,
  type LinkSessionSuccessMetadataInstitution,
} from "./link-session-success-metadata-institution.js";

export type LinkSessionPayrollIncomeResult = {
  numPaystubsRetrieved: number;
  numW2SRetrieved: number;
  institution: LinkSessionSuccessMetadataInstitution | null;
};

export const linkSessionPayrollIncomeResultSchema: Schema<LinkSessionPayrollIncomeResult> =
  s.object<LinkSessionPayrollIncomeResult>({
    numPaystubsRetrieved: s.number(),
    numW2SRetrieved: s.number(),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      numPaystubsRetrieved: "num_paystubs_retrieved",
      numW2SRetrieved: "num_w2s_retrieved",
    },
  });
