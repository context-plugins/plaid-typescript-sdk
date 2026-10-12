import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationPrecheckEmployerSchema,
  type IncomeVerificationPrecheckEmployer,
} from "./income-verification-precheck-employer.js";
import {
  incomeVerificationPrecheckMilitaryInfoSchema,
  type IncomeVerificationPrecheckMilitaryInfo,
} from "./income-verification-precheck-military-info.js";
import {
  incomeVerificationPrecheckPayrollInstitutionSchema,
  type IncomeVerificationPrecheckPayrollInstitution,
} from "./income-verification-precheck-payroll-institution.js";

/** Defines the request schema for `/credit/payroll_income/precheck`. */
export type CreditPayrollIncomePrecheckRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  userId?: string;
  /**
   * An array of access tokens corresponding to Items belonging to the user whose eligibility is
   * being checked. Note that if the Items specified here are not already initialized with
   * `transactions`, providing them in this field will cause these Items to be initialized with (and
   * billed for) the Transactions product.
   */
  accessTokens?: string[];
  /** Information about the end user's employer */
  employer?: IncomeVerificationPrecheckEmployer | null;
  /** Data about military info in the income verification precheck. */
  usMilitaryInfo?: IncomeVerificationPrecheckMilitaryInfo | null;
  /** Information about the end user's payroll institution */
  payrollInstitution?: IncomeVerificationPrecheckPayrollInstitution | null;
};

export const creditPayrollIncomePrecheckRequestSchema: Schema<CreditPayrollIncomePrecheckRequest> =
  s.object<CreditPayrollIncomePrecheckRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    userId: s.optional(s.string()),
    accessTokens: s.optional(s.array(s.string())),
    employer: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckEmployerSchema)),
    usMilitaryInfo: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckMilitaryInfoSchema)),
    payrollInstitution: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckPayrollInstitutionSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
      accessTokens: "access_tokens",
      usMilitaryInfo: "us_military_info",
      payrollInstitution: "payroll_institution",
    },
  });
