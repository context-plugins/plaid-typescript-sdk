import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sandboxPublicTokenCreateRequestOptionsIncomeVerificationSchema,
  type SandboxPublicTokenCreateRequestOptionsIncomeVerification,
} from "./sandbox-public-token-create-request-options-income-verification.js";
import {
  sandboxPublicTokenCreateRequestOptionsStatementsSchema,
  type SandboxPublicTokenCreateRequestOptionsStatements,
} from "./sandbox-public-token-create-request-options-statements.js";
import {
  sandboxPublicTokenCreateRequestOptionsTransactionsSchema,
  type SandboxPublicTokenCreateRequestOptionsTransactions,
} from "./sandbox-public-token-create-request-options-transactions.js";

export type SandboxPublicTokenCreateRequestOptions = {
  webhook?: string;
  overrideUsername?: string | null;
  overridePassword?: string | null;
  transactions?: SandboxPublicTokenCreateRequestOptionsTransactions | null;
  statements?: SandboxPublicTokenCreateRequestOptionsStatements | null;
  incomeVerification?: SandboxPublicTokenCreateRequestOptionsIncomeVerification;
};

export const sandboxPublicTokenCreateRequestOptionsSchema: Schema<SandboxPublicTokenCreateRequestOptions> =
  s.object<SandboxPublicTokenCreateRequestOptions>({
    webhook: s.optional(s.string()),
    overrideUsername: s.optionalNullable(s.string()),
    overridePassword: s.optionalNullable(s.string()),
    transactions: s.optionalNullable(s.lazy(() => sandboxPublicTokenCreateRequestOptionsTransactionsSchema)),
    statements: s.optionalNullable(s.lazy(() => sandboxPublicTokenCreateRequestOptionsStatementsSchema)),
    incomeVerification: s.optional(
      s.lazy(() => sandboxPublicTokenCreateRequestOptionsIncomeVerificationSchema),
    ),
    _keysMap: {
      overrideUsername: "override_username",
      overridePassword: "override_password",
      incomeVerification: "income_verification",
    },
  });
