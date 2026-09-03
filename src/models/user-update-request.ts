import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientUserIdentitySchema, type ClientUserIdentity } from "./client-user-identity.js";
import {
  consumerReportUserIdentitySchema,
  type ConsumerReportUserIdentity,
} from "./consumer-report-user-identity.js";

export type UserUpdateRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  identity?: ClientUserIdentity | null;
  userToken?: string;
  consumerReportUserIdentity?: ConsumerReportUserIdentity | null;
};

export const userUpdateRequestSchema: Schema<UserUpdateRequest> = s.object<UserUpdateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userId: s.optional(s.string()),
  identity: s.optionalNullable(s.lazy(() => clientUserIdentitySchema)),
  userToken: s.optional(s.string()),
  consumerReportUserIdentity: s.optionalNullable(s.lazy(() => consumerReportUserIdentitySchema)),
  _keysMap: {
    clientId: "client_id",
    userId: "user_id",
    userToken: "user_token",
    consumerReportUserIdentity: "consumer_report_user_identity",
  },
});
