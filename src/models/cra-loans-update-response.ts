import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraLoansUpdateResponse = {
  requestId: string;
};

export const craLoansUpdateResponseSchema: Schema<CraLoansUpdateResponse> = s.object<CraLoansUpdateResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
