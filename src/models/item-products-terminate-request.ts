import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  productsTerminateReasonCodeSchema,
  type ProductsTerminateReasonCode,
} from "./products-terminate-reason-code.js";

export type ItemProductsTerminateRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  reasonCode: ProductsTerminateReasonCode;
  reasonNote?: string | null;
};

export const itemProductsTerminateRequestSchema: Schema<ItemProductsTerminateRequest> =
  s.object<ItemProductsTerminateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    reasonCode: productsTerminateReasonCodeSchema,
    reasonNote: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      reasonCode: "reason_code",
      reasonNote: "reason_note",
    },
  });
