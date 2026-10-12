import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SandboxUserResetLoginResponse defines the response schema for `/sandbox/user/reset_login` */
export type SandboxUserResetLoginResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxUserResetLoginResponseSchema: Schema<SandboxUserResetLoginResponse> =
  s.object<SandboxUserResetLoginResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
