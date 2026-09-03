import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerRequirementDueSchema,
  type PartnerEndCustomerRequirementDue,
} from "./partner-end-customer-requirement-due.js";
import {
  partnerEndCustomerStatusSchema,
  type PartnerEndCustomerStatus,
} from "./partner-end-customer-status.js";

export type BetaPartnerEndCustomer = {
  clientId?: string;
  companyName?: string;
  status?: PartnerEndCustomerStatus;
  productStatuses?: Record<string, unknown>;
  requirementsDue?: PartnerEndCustomerRequirementDue[];
};

export const betaPartnerEndCustomerSchema: Schema<BetaPartnerEndCustomer> = s.object<BetaPartnerEndCustomer>({
  clientId: s.optional(s.string()),
  companyName: s.optional(s.string()),
  status: s.optional(s.lazy(() => partnerEndCustomerStatusSchema)),
  productStatuses: s.optional(s.record(s.string(), s.unknown())),
  requirementsDue: s.optional(s.array(s.lazy(() => partnerEndCustomerRequirementDueSchema))),
  _keysMap: {
    clientId: "client_id",
    companyName: "company_name",
    productStatuses: "product_statuses",
    requirementsDue: "requirements_due",
  },
});
