import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  betaPartnerEndCustomerWithSecretsSchema,
  type BetaPartnerEndCustomerWithSecrets,
} from "./beta-partner-end-customer-with-secrets.js";

export type BetaPartnerCustomerV1CreateResponse = {
  endCustomer?: BetaPartnerEndCustomerWithSecrets;
  requestId?: string;
};

export const betaPartnerCustomerV1CreateResponseSchema: Schema<BetaPartnerCustomerV1CreateResponse> =
  s.object<BetaPartnerCustomerV1CreateResponse>({
    endCustomer: s.optional(s.lazy(() => betaPartnerEndCustomerWithSecretsSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      endCustomer: "end_customer",
      requestId: "request_id",
    },
  });
