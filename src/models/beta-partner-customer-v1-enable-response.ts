import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerStatusSchema,
  type PartnerEndCustomerStatus,
} from "./partner-end-customer-status.js";

export type BetaPartnerCustomerV1EnableResponse = {
  endCustomerClientId?: string;
  status?: PartnerEndCustomerStatus;
  productStatuses?: Record<string, unknown>;
  productionSecret?: string;
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
