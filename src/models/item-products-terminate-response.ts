import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemProductsTerminateResponse = {
  requestId: string;
};

export const itemProductsTerminateResponseSchema: Schema<ItemProductsTerminateResponse> =
  s.object<ItemProductsTerminateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
