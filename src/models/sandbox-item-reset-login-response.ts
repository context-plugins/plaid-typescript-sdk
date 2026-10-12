import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** SandboxItemResetLoginResponse defines the response schema for `/sandbox/item/reset_login` */
export type SandboxItemResetLoginResponse = {
  /** `true` if the call succeeded */
  resetLogin: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxItemResetLoginResponseSchema: Schema<SandboxItemResetLoginResponse> =
  s.object<SandboxItemResetLoginResponse>({
    resetLogin: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      resetLogin: "reset_login",
      requestId: "request_id",
    },
  });
