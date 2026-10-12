import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerWithSecretsSchema,
  type PartnerEndCustomerWithSecrets,
} from "./partner-end-customer-with-secrets.js";

/** Response schema for `/partner/customer/create`. */
export type PartnerCustomerCreateResponse = {
  /**
   * The details for the newly created end customer, including secrets for non-Production
   * environments.
   */
  endCustomer?: PartnerEndCustomerWithSecrets;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
};

export const partnerCustomerCreateResponseSchema: Schema<PartnerCustomerCreateResponse> =
  s.object<PartnerCustomerCreateResponse>({
    endCustomer: s.optional(s.lazy(() => partnerEndCustomerWithSecretsSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
