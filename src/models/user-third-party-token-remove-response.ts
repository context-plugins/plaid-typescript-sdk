import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserThirdPartyTokenRemoveResponse = {
  removed: boolean;
  requestId: string;
};

export const userThirdPartyTokenRemoveResponseSchema: Schema<UserThirdPartyTokenRemoveResponse> =
  s.object<UserThirdPartyTokenRemoveResponse>({
    removed: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
