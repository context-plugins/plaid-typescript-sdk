import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraLoanRegisterApplication = {
  applicationId?: string;
  applicationDate?: string;
};

export const craLoanRegisterApplicationSchema: Schema<CraLoanRegisterApplication> =
  s.object<CraLoanRegisterApplication>({
    applicationId: s.optional(s.string()),
    applicationDate: s.optional(s.dateOnly()),
    _keysMap: {
      applicationId: "application_id",
      applicationDate: "application_date",
    },
  });
