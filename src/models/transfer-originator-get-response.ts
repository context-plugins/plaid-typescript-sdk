import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detailedOriginatorSchema, type DetailedOriginator } from "./detailed-originator.js";

/** Defines the response schema for `/transfer/originator/get` */
export type TransferOriginatorGetResponse = {
  /** Originator and their status. */
  originator: DetailedOriginator;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferOriginatorGetResponseSchema: Schema<TransferOriginatorGetResponse> =
  s.object<TransferOriginatorGetResponse>({
    originator: detailedOriginatorSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
