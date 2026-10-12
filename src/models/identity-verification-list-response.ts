import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identityVerificationSchema, type IdentityVerification } from "./identity-verification.js";

/** Paginated list of Plaid sessions. */
export type IdentityVerificationListResponse = {
  /** List of Plaid sessions */
  identityVerifications: IdentityVerification[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
