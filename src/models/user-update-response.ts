import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserUpdateResponse = {
  requestId: string;
};

export const userUpdateResponseSchema: Schema<UserUpdateResponse> = s.object<UserUpdateResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
