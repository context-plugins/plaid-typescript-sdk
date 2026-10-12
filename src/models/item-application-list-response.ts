import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectedApplicationSchema, type ConnectedApplication } from "./connected-application.js";

/** Describes the connected application for a particular end user. */
export type ItemApplicationListResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
  /** A list of connected applications. */
  applications: ConnectedApplication[];
};

export const itemApplicationListResponseSchema: Schema<ItemApplicationListResponse> =
  s.object<ItemApplicationListResponse>({
    requestId: s.optional(s.string()),
    applications: s.array(s.lazy(() => connectedApplicationSchema)),
    _keysMap: {
      requestId: "request_id",
    },
  });
