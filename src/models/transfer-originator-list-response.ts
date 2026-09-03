import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originatorSchema, type Originator } from "./originator.js";

export type TransferOriginatorListResponse = {
  originators: Originator[];
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
