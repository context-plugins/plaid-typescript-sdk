import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authVerifyRequestNumbersSchema,
  type AuthVerifyRequestNumbers,
} from "./auth-verify-request-numbers.js";

/** AuthVerifyRequest defines the request schema for `/auth/verify` */
export type AuthVerifyRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** Account owner's legal name */
  legalName?: string | null;
  /** An object containing identifying account numbers for verification via Database Auth */
  numbers: AuthVerifyRequestNumbers;
};

export const authVerifyRequestSchema: Schema<AuthVerifyRequest> = s.object<AuthVerifyRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  legalName: s.optionalNullable(s.string()),
  numbers: authVerifyRequestNumbersSchema,
  _keysMap: {
    clientId: "client_id",
    legalName: "legal_name",
  },
});
