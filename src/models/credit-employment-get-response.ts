import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditEmploymentItemSchema, type CreditEmploymentItem } from "./credit-employment-item.js";

export type CreditEmploymentGetResponse = {
  items: CreditEmploymentItem[];
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
