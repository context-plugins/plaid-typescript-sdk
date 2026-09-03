import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientUserIdentitySchema, type ClientUserIdentity } from "./client-user-identity.js";
import {
  consumerReportUserIdentitySchema,
  type ConsumerReportUserIdentity,
} from "./consumer-report-user-identity.js";

export type UserCreateRequest = {
  clientId?: string;
  secret?: string;
  clientUserId: string;
  identity?: ClientUserIdentity | null;
  endCustomer?: string;
  consumerReportUserIdentity?: ConsumerReportUserIdentity | null;
  withUpgradedUser?: boolean;
};

export const userCreateRequestSchema: Schema<UserCreateRequest> = s.object<UserCreateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  clientUserId: s.string(),
  identity: s.optionalNullable(s.lazy(() => clientUserIdentitySchema)),
  endCustomer: s.optional(s.string()),
  consumerReportUserIdentity: s.optionalNullable(s.lazy(() => consumerReportUserIdentitySchema)),
  withUpgradedUser: s.optional(s.boolean()),
  _keysMap: {
    clientId: "client_id",
    clientUserId: "client_user_id",
    endCustomer: "end_customer",
    consumerReportUserIdentity: "consumer_report_user_identity",
    withUpgradedUser: "with_upgraded_user",
  },
});
