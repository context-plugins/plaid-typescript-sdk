import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOriginatorCreateResponse = {
  originatorClientId: string;
  companyName: string;
  requestId: string;
};

export const transferOriginatorCreateResponseSchema: Schema<TransferOriginatorCreateResponse> =
  s.object<TransferOriginatorCreateResponse>({
    originatorClientId: s.string(),
    companyName: s.string(),
    requestId: s.string(),
    _keysMap: {
      originatorClientId: "originator_client_id",
      companyName: "company_name",
      requestId: "request_id",
    },
  });
