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

/**
 * An optional set of options to be used when configuring the Item. If specified, must not be
 * `null`.
 */
export type SandboxPublicTokenCreateRequestOptions = {
  /** Specify a webhook to associate with the new Item. */
  webhook?: string;
  /**
   * Test username to use for the creation of the Sandbox Item. Default value is `user_good`. You
   * can also use a custom test user — either set this to the username of a custom user configured
   * in the Dashboard, or set it to `user_custom` and pass the JSON-stringified custom user
   * configuration object as `override_password` to define one entirely via API. See [Sandbox Custom
   * Users](https://plaid.com/docs/sandbox/user-custom) for more details.
   *
   * @default "user_good"
   */
  overrideUsername?: string | null;
  /**
   * Test password to use for the creation of the Sandbox Item. Default value is `pass_good`. You
   * can also use a custom test user — reference one configured in the Dashboard via
   * `override_username`, or set `override_username` to `user_custom` and pass the JSON-stringified
   * custom user configuration object as this field to define one entirely via API. See [Sandbox
   * Custom Users](https://plaid.com/docs/sandbox/user-custom) for more details.
   *
   * @default "pass_good"
   */
  overridePassword?: string | null;
  /** An optional set of parameters corresponding to transactions options. */
  transactions?: SandboxPublicTokenCreateRequestOptionsTransactions | null;
  /** An optional set of parameters corresponding to statements options. */
  statements?: SandboxPublicTokenCreateRequestOptionsStatements | null;
  /**
   * A set of parameters for income verification options. This field is required if
   * `income_verification` is included in the `initial_products` array.
   */
  incomeVerification?: SandboxPublicTokenCreateRequestOptionsIncomeVerification;
};

export const sandboxPublicTokenCreateRequestOptionsSchema: Schema<SandboxPublicTokenCreateRequestOptions> =
  s.object<SandboxPublicTokenCreateRequestOptions>({
    webhook: s.optional(s.string()),
    overrideUsername: s.defaulted(s.nullable(s.string()), "user_good"),
    overridePassword: s.defaulted(s.nullable(s.string()), "pass_good"),
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
