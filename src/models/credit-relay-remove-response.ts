import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CreditRelayRemoveResponse defines the response schema for `/credit/relay/remove` */
export type CreditRelayRemoveResponse = {
  /** `true` if the relay token was successfully removed. */
  removed: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
