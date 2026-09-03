import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditPayrollIncomeGetRequestOptionsSchema,
  type CreditPayrollIncomeGetRequestOptions,
} from "./credit-payroll-income-get-request-options.js";

export type CreditPayrollIncomeGetRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  userId?: string;
  options?: CreditPayrollIncomeGetRequestOptions;
};

export const creditPayrollIncomeGetRequestSchema: Schema<CreditPayrollIncomeGetRequest> =
  s.object<CreditPayrollIncomeGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    userId: s.optional(s.string()),
    options: s.optional(s.lazy(() => creditPayrollIncomeGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
    },
  });
