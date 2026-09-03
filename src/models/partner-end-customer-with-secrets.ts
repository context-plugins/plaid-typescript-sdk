import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerSecretsSchema,
  type PartnerEndCustomerSecrets,
} from "./partner-end-customer-secrets.js";
import {
  partnerEndCustomerStatusSchema,
  type PartnerEndCustomerStatus,
} from "./partner-end-customer-status.js";

export type PartnerEndCustomerWithSecrets = {
  clientId?: string;
  companyName?: string;
  status?: PartnerEndCustomerStatus;
  secrets?: PartnerEndCustomerSecrets;
};

export const partnerEndCustomerWithSecretsSchema: Schema<PartnerEndCustomerWithSecrets> =
  s.object<PartnerEndCustomerWithSecrets>({
    clientId: s.optional(s.string()),
    companyName: s.optional(s.string()),
    status: s.optional(s.lazy(() => partnerEndCustomerStatusSchema)),
    secrets: s.optional(s.lazy(() => partnerEndCustomerSecretsSchema)),
    _keysMap: {
      clientId: "client_id",
      companyName: "company_name",
    },
  });
