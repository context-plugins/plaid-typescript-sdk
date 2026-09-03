import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemApplicationUnlinkResponse = {
  requestId: string;
};

export const itemApplicationUnlinkResponseSchema: Schema<ItemApplicationUnlinkResponse> =
  s.object<ItemApplicationUnlinkResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
