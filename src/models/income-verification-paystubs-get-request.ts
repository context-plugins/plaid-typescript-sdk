import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeVerificationPaystubsGetRequest = {
  clientId?: string;
  secret?: string;
  incomeVerificationId?: string | null;
  accessToken?: string | null;
};

export const incomeVerificationPaystubsGetRequestSchema: Schema<IncomeVerificationPaystubsGetRequest> =
  s.object<IncomeVerificationPaystubsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    incomeVerificationId: s.optionalNullable(s.string()),
    accessToken: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      incomeVerificationId: "income_verification_id",
      accessToken: "access_token",
    },
  });
