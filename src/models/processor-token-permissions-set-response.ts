import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorTokenPermissionsSetResponse defines the response schema for
 * `/processor/token/permissions/set`
 */
export type ProcessorTokenPermissionsSetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorTokenPermissionsSetResponseSchema: Schema<ProcessorTokenPermissionsSetResponse> =
  s.object<ProcessorTokenPermissionsSetResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
