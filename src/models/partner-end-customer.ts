import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerStatusSchema,
  type PartnerEndCustomerStatus,
} from "./partner-end-customer-status.js";

/** The details for an end customer. */
export type PartnerEndCustomer = {
  /** The `client_id` of the end customer. */
  clientId?: string;
  /** The company name associated with the end customer. */
  companyName?: string;
  /**
   * The status of the given end customer.
   *
   * `UNDER_REVIEW`: The end customer has been created and enabled in the Sandbox environment. The
   * end customer must be manually reviewed by the Plaid team before it can be enabled in
   * Production, at which point its status will automatically transition to `PENDING_ENABLEMENT` or
   * `DENIED`.
   *
   * `PENDING_ENABLEMENT`: The end customer is ready to be fully enabled in the Production
   * environment. Call the `/partner/customer/enable` endpoint to enable the end customer in full
   * Production.
   *
   * `ACTIVE`: The end customer has been fully enabled in all environments.
   *
   * `DENIED`: The end customer has been created and enabled in the Sandbox environment, but it did
   * not pass review by the Plaid team and therefore cannot be enabled for Production access. Talk
   * to your account manager for more information.
   */
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
