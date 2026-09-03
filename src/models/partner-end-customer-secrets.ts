import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PartnerEndCustomerSecrets = {
  sandbox?: string;
  development?: string;
  production?: string;
};

export const partnerEndCustomerSecretsSchema: Schema<PartnerEndCustomerSecrets> =
  s.object<PartnerEndCustomerSecrets>({
    sandbox: s.optional(s.string()),
    development: s.optional(s.string()),
    production: s.optional(s.string()),
  });
