import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerRequirementDueSchema,
  type PartnerEndCustomerRequirementDue,
} from "./partner-end-customer-requirement-due.js";
import {
  partnerEndCustomerSecretsSchema,
  type PartnerEndCustomerSecrets,
} from "./partner-end-customer-secrets.js";
import {
  partnerEndCustomerStatusSchema,
  type PartnerEndCustomerStatus,
} from "./partner-end-customer-status.js";

export type BetaPartnerEndCustomerWithSecrets = {
  clientId?: string;
  companyName?: string;
  status?: PartnerEndCustomerStatus;
  productStatuses?: Record<string, unknown>;
  requirementsDue?: PartnerEndCustomerRequirementDue[];
  secrets?: PartnerEndCustomerSecrets;
};

export const betaPartnerEndCustomerWithSecretsSchema: Schema<BetaPartnerEndCustomerWithSecrets> =
  s.object<BetaPartnerEndCustomerWithSecrets>({
    clientId: s.optional(s.string()),
    companyName: s.optional(s.string()),
    status: s.optional(s.lazy(() => partnerEndCustomerStatusSchema)),
    productStatuses: s.optional(s.record(s.string(), s.unknown())),
    requirementsDue: s.optional(s.array(s.lazy(() => partnerEndCustomerRequirementDueSchema))),
    secrets: s.optional(s.lazy(() => partnerEndCustomerSecretsSchema)),
    _keysMap: {
      clientId: "client_id",
      companyName: "company_name",
      productStatuses: "product_statuses",
      requirementsDue: "requirements_due",
    },
  });
