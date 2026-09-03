import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatementsRefreshResponse = {
  requestId: string;
};

export const statementsRefreshResponseSchema: Schema<StatementsRefreshResponse> =
  s.object<StatementsRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
