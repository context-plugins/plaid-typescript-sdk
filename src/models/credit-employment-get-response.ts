import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditEmploymentItemSchema, type CreditEmploymentItem } from "./credit-employment-item.js";

/** CreditEmploymentGetResponse defines the response schema for `/credit/employment/get`. */
export type CreditEmploymentGetResponse = {
  /** Array of employment items. */
  items: CreditEmploymentItem[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const creditEmploymentGetResponseSchema: Schema<CreditEmploymentGetResponse> =
  s.object<CreditEmploymentGetResponse>({
    items: s.array(s.lazy(() => creditEmploymentItemSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
