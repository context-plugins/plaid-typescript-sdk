import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authVerifyRequestNumbersSchema,
  type AuthVerifyRequestNumbers,
} from "./auth-verify-request-numbers.js";

export type AuthVerifyRequest = {
  clientId?: string;
  secret?: string;
  legalName?: string | null;
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
