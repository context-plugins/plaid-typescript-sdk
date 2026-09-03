import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserRemoveResponse = {
  requestId: string;
};

export const userRemoveResponseSchema: Schema<UserRemoveResponse> = s.object<UserRemoveResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
