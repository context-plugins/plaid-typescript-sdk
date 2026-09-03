import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraLoansRegisterResponse = {
  requestId: string;
};

export const craLoansRegisterResponseSchema: Schema<CraLoansRegisterResponse> =
  s.object<CraLoansRegisterResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
