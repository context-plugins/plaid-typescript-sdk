import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OAuthRevokeResponse = {
  requestId: string;
};

export const oAuthRevokeResponseSchema: Schema<OAuthRevokeResponse> = s.object<OAuthRevokeResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
