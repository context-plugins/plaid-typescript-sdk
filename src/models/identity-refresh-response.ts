import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdentityRefreshResponse = {
  requestId: string;
};

export const identityRefreshResponseSchema: Schema<IdentityRefreshResponse> =
  s.object<IdentityRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
