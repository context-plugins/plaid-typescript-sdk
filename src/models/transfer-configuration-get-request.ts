import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferConfigurationGetRequest = {
  clientId?: string;
  secret?: string;
  originatorClientId?: string | null;
};

export const transferConfigurationGetRequestSchema: Schema<TransferConfigurationGetRequest> =
  s.object<TransferConfigurationGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
    },
  });
