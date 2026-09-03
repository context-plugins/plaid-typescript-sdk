import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detailedOriginatorSchema, type DetailedOriginator } from "./detailed-originator.js";

export type TransferOriginatorGetResponse = {
  originator: DetailedOriginator;
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
