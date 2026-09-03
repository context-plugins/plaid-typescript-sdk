import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientUserIdentitySchema, type ClientUserIdentity } from "./client-user-identity.js";

export type UserGetResponse = {
  requestId: string;
  userId: string;
  clientUserId: string | null;
  createdAt: Date;
  updatedAt?: Date;
  identity?: ClientUserIdentity | null;
};

export const userGetResponseSchema: Schema<UserGetResponse> = s.object<UserGetResponse>({
  requestId: s.string(),
  userId: s.string(),
  clientUserId: s.nullable(s.string()),
  createdAt: s.dateTime(),
  updatedAt: s.optional(s.dateTime()),
  identity: s.optionalNullable(s.lazy(() => clientUserIdentitySchema)),
  _keysMap: {
    requestId: "request_id",
    userId: "user_id",
    clientUserId: "client_user_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
