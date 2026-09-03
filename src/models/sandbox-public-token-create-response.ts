import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxPublicTokenCreateResponse = {
  publicToken: string;
  requestId: string;
};

export const sandboxPublicTokenCreateResponseSchema: Schema<SandboxPublicTokenCreateResponse> =
  s.object<SandboxPublicTokenCreateResponse>({
    publicToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      publicToken: "public_token",
      requestId: "request_id",
    },
  });
