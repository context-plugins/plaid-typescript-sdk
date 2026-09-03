import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOriginatorFundingAccountUpdateResponse = {
  requestId: string;
};

export const transferOriginatorFundingAccountUpdateResponseSchema: Schema<TransferOriginatorFundingAccountUpdateResponse> =
  s.object<TransferOriginatorFundingAccountUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
