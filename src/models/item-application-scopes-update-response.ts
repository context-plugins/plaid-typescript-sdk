import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemApplicationScopesUpdateResponse = {
  requestId: string;
};

export const itemApplicationScopesUpdateResponseSchema: Schema<ItemApplicationScopesUpdateResponse> =
  s.object<ItemApplicationScopesUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
