import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  productsTerminateReasonCodeSchema,
  type ProductsTerminateReasonCode,
} from "./products-terminate-reason-code.js";

export type UserProductsTerminateRequest = {
  clientId?: string;
  secret?: string;
  userId: string;
  reasonCode: ProductsTerminateReasonCode;
  reasonNote?: string | null;
};

export const userProductsTerminateRequestSchema: Schema<UserProductsTerminateRequest> =
  s.object<UserProductsTerminateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.string(),
    reasonCode: productsTerminateReasonCodeSchema,
    reasonNote: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      reasonCode: "reason_code",
      reasonNote: "reason_note",
    },
  });
