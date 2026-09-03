import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserCreateResponse = {
  userToken?: string;
  userId: string;
  requestId: string;
};

export const userCreateResponseSchema: Schema<UserCreateResponse> = s.object<UserCreateResponse>({
  userToken: s.optional(s.string()),
  userId: s.string(),
  requestId: s.string(),
  _keysMap: {
    userToken: "user_token",
    userId: "user_id",
    requestId: "request_id",
  },
});
