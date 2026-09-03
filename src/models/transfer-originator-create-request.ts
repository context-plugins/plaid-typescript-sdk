import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOriginatorCreateRequest = {
  clientId?: string;
  secret?: string;
  companyName: string;
};

export const transferOriginatorCreateRequestSchema: Schema<TransferOriginatorCreateRequest> =
  s.object<TransferOriginatorCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    companyName: s.string(),
    _keysMap: {
      clientId: "client_id",
      companyName: "company_name",
    },
  });
