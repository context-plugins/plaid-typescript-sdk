import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerStatusSchema,
  type PartnerEndCustomerStatus,
} from "./partner-end-customer-status.js";

/** Response schema for `/beta/partner/customer/v1/enable`. */
export type BetaPartnerCustomerV1EnableResponse = {
  endCustomerClientId?: string;
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
  /** Mapping of product names to their current status. */
  productStatuses?: Record<string, unknown>;
  productionSecret?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const betaPartnerCustomerV1EnableResponseSchema: Schema<BetaPartnerCustomerV1EnableResponse> =
  s.object<BetaPartnerCustomerV1EnableResponse>({
    endCustomerClientId: s.optional(s.string()),
    status: s.optional(s.lazy(() => partnerEndCustomerStatusSchema)),
    productStatuses: s.optional(s.record(s.string(), s.unknown())),
    productionSecret: s.optional(s.string()),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomerClientId: "end_customer_client_id",
      productStatuses: "product_statuses",
      productionSecret: "production_secret",
      requestId: "request_id",
    },
  });
