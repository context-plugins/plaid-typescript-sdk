import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The secrets for the newly created end customer. */
export type PartnerEndCustomerSecrets = {
  /** The end customer's secret key for the Sandbox environment. */
  sandbox?: string;
  /**
   * The end customer's secret key for the Development environment. The Development environment has
   * been removed.
   *
   * @deprecated
   */
  development?: string;
  /**
   * The end customer's secret key for the Production environment. The end customer will be provided
   * with a limited number of credits to test in the Production environment before full enablement.
   */
  production?: string;
};

export const partnerEndCustomerSecretsSchema: Schema<PartnerEndCustomerSecrets> =
  s.object<PartnerEndCustomerSecrets>({
    sandbox: s.optional(s.string()),
    development: s.optional(s.string()),
    production: s.optional(s.string()),
  });
