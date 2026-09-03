import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionBankEmploymentStatusSchema,
  type CreditSessionBankEmploymentStatus,
} from "./credit-session-bank-employment-status.js";
import {
  linkSessionSuccessMetadataInstitutionSchema,
  type LinkSessionSuccessMetadataInstitution,
} from "./link-session-success-metadata-institution.js";

export type LinkSessionBankEmploymentResult = {
  status: CreditSessionBankEmploymentStatus;
  itemId: string;
  institution: LinkSessionSuccessMetadataInstitution | null;
};

export const linkSessionBankEmploymentResultSchema: Schema<LinkSessionBankEmploymentResult> =
  s.object<LinkSessionBankEmploymentResult>({
    status: creditSessionBankEmploymentStatusSchema,
    itemId: s.string(),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      itemId: "item_id",
    },
  });
