import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferCapabilitiesGetRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  accountId: string;
  paymentProfileToken?: string;
};

export const transferCapabilitiesGetRequestSchema: Schema<TransferCapabilitiesGetRequest> =
  s.object<TransferCapabilitiesGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    accountId: s.string(),
    paymentProfileToken: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      accountId: "account_id",
      paymentProfileToken: "payment_profile_token",
    },
  });
