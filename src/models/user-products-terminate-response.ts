import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserProductsTerminateResponse = {
  requestId: string;
};

export const userProductsTerminateResponseSchema: Schema<UserProductsTerminateResponse> =
  s.object<UserProductsTerminateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
