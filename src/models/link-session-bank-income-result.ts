import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionBankIncomeStatusSchema,
  type CreditSessionBankIncomeStatus,
} from "./credit-session-bank-income-status.js";
import {
  linkSessionSuccessMetadataInstitutionSchema,
  type LinkSessionSuccessMetadataInstitution,
} from "./link-session-success-metadata-institution.js";

export type LinkSessionBankIncomeResult = {
  status: CreditSessionBankIncomeStatus;
  itemId: string;
  institution: LinkSessionSuccessMetadataInstitution | null;
};

export const linkSessionBankIncomeResultSchema: Schema<LinkSessionBankIncomeResult> =
  s.object<LinkSessionBankIncomeResult>({
    status: creditSessionBankIncomeStatusSchema,
    itemId: s.string(),
    institution: s.nullable(s.lazy(() => linkSessionSuccessMetadataInstitutionSchema)),
    _keysMap: {
      itemId: "item_id",
    },
  });
