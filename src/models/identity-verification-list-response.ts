import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identityVerificationSchema, type IdentityVerification } from "./identity-verification.js";

export type IdentityVerificationListResponse = {
  identityVerifications: IdentityVerification[];
  nextCursor: string | null;
  requestId: string;
};

export const identityVerificationListResponseSchema: Schema<IdentityVerificationListResponse> =
  s.object<IdentityVerificationListResponse>({
    identityVerifications: s.array(s.lazy(() => identityVerificationSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      identityVerifications: "identity_verifications",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
