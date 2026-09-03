import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditSessionBankEmploymentStatusSchema,
  type CreditSessionBankEmploymentStatus,
} from "./credit-session-bank-employment-status.js";

export type CreditSessionBankEmploymentResult = {
  status?: CreditSessionBankEmploymentStatus;
  itemId?: string;
  institutionId?: string;
};

export const creditSessionBankEmploymentResultSchema: Schema<CreditSessionBankEmploymentResult> =
  s.object<CreditSessionBankEmploymentResult>({
    status: s.optional(s.lazy(() => creditSessionBankEmploymentStatusSchema)),
    itemId: s.optional(s.string()),
    institutionId: s.optional(s.string()),
    _keysMap: {
      itemId: "item_id",
      institutionId: "institution_id",
    },
  });
