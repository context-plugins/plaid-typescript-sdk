import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains loan application data to register. */
export type CraLoanRegisterApplication = {
  /**
   * A unique identifier for the loan application. Personally identifiable information, such as an
   * email address or phone number, should not be used in the `application_id`.
   */
  applicationId?: string;
  /** The date the user applied for the loan. The date should be in ISO 8601 format (YYYY-MM-DD). */
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
