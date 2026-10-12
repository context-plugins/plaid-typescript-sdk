import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/platform/person/create` */
export type TransferPlatformPersonCreateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /**
   * An ID that should be used when submitting additional requirements that are associated with this
   * person.
   */
  personId: string;
};

export const transferPlatformPersonCreateResponseSchema: Schema<TransferPlatformPersonCreateResponse> =
  s.object<TransferPlatformPersonCreateResponse>({
    requestId: s.string(),
    personId: s.string(),
    _keysMap: {
      requestId: "request_id",
      personId: "person_id",
    },
  });
