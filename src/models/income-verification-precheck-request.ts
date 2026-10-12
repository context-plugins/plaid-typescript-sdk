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
import {
  incomeVerificationPrecheckUserSchema,
  type IncomeVerificationPrecheckUser,
} from "./income-verification-precheck-user.js";

/**
 * IncomeVerificationPrecheckRequest defines the request schema for `/income/verification/precheck`
 */
export type IncomeVerificationPrecheckRequest = {
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
  /** Information about the user whose eligibility is being evaluated. */
  user?: IncomeVerificationPrecheckUser | null;
  /** Information about the end user's employer */
  employer?: IncomeVerificationPrecheckEmployer | null;
  /** Information about the end user's payroll institution */
  payrollInstitution?: IncomeVerificationPrecheckPayrollInstitution | null;
  /**
   * @deprecated
   */
  transactionsAccessToken?: string | null;
  /**
   * An array of access tokens corresponding to Items belonging to the user whose eligibility is
   * being checked. Note that if the Items specified here are not already initialized with
   * `transactions`, providing them in this field will cause these Items to be initialized with (and
   * billed for) the Transactions product.
   */
  transactionsAccessTokens?: string[];
  /** Data about military info in the income verification precheck. */
  usMilitaryInfo?: IncomeVerificationPrecheckMilitaryInfo | null;
};

export const incomeVerificationPrecheckRequestSchema: Schema<IncomeVerificationPrecheckRequest> =
  s.object<IncomeVerificationPrecheckRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    user: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckUserSchema)),
    employer: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckEmployerSchema)),
    payrollInstitution: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckPayrollInstitutionSchema)),
    transactionsAccessToken: s.optionalNullable(s.string()),
    transactionsAccessTokens: s.optional(s.array(s.string())),
    usMilitaryInfo: s.optionalNullable(s.lazy(() => incomeVerificationPrecheckMilitaryInfoSchema)),
    _keysMap: {
      clientId: "client_id",
      payrollInstitution: "payroll_institution",
      transactionsAccessToken: "transactions_access_token",
      transactionsAccessTokens: "transactions_access_tokens",
      usMilitaryInfo: "us_military_info",
    },
  });
