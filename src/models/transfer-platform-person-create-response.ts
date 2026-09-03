import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferPlatformPersonCreateResponse = {
  requestId: string;
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
