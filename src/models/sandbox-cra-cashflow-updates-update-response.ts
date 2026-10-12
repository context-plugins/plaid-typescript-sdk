import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxCraCashflowUpdatesUpdateResponse defines the response schema for
 * `/sandbox/cra/cashflow_updates/update`
 */
export type SandboxCraCashflowUpdatesUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxCraCashflowUpdatesUpdateResponseSchema: Schema<SandboxCraCashflowUpdatesUpdateResponse> =
  s.object<SandboxCraCashflowUpdatesUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
