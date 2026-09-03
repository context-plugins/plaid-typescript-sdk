import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerStatusSchema,
  type PartnerEndCustomerStatus,
} from "./partner-end-customer-status.js";

export type PartnerEndCustomer = {
  clientId?: string;
  companyName?: string;
  status?: PartnerEndCustomerStatus;
};

export const partnerEndCustomerSchema: Schema<PartnerEndCustomer> = s.object<PartnerEndCustomer>({
  clientId: s.optional(s.string()),
  companyName: s.optional(s.string()),
  status: s.optional(s.lazy(() => partnerEndCustomerStatusSchema)),
  _keysMap: {
    clientId: "client_id",
    companyName: "company_name",
  },
});
