import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originatorSchema, type Originator } from "./originator.js";

/** Defines the response schema for `/transfer/originator/list` */
export type TransferOriginatorListResponse = {
  originators: Originator[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferOriginatorListResponseSchema: Schema<TransferOriginatorListResponse> =
  s.object<TransferOriginatorListResponse>({
    originators: s.array(s.lazy(() => originatorSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
