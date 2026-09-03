import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayRemoveResponse = {
  removed: boolean;
  requestId: string;
};

export const creditRelayRemoveResponseSchema: Schema<CreditRelayRemoveResponse> =
  s.object<CreditRelayRemoveResponse>({
    removed: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
