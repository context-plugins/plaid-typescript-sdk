import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditPayrollIncomeRefreshRequestOptionsSchema,
  type CreditPayrollIncomeRefreshRequestOptions,
} from "./credit-payroll-income-refresh-request-options.js";

export type CreditPayrollIncomeRefreshRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
  userId?: string;
  options?: CreditPayrollIncomeRefreshRequestOptions;
};

export const creditPayrollIncomeRefreshRequestSchema: Schema<CreditPayrollIncomeRefreshRequest> =
  s.object<CreditPayrollIncomeRefreshRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    userId: s.optional(s.string()),
    options: s.optional(s.lazy(() => creditPayrollIncomeRefreshRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
    },
  });
