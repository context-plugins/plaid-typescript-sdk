import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IncomeVerificationCreateRequestOptions = {
  accessTokens?: string[];
};

export const incomeVerificationCreateRequestOptionsSchema: Schema<IncomeVerificationCreateRequestOptions> =
  s.object<IncomeVerificationCreateRequestOptions>({
    accessTokens: s.optional(s.array(s.string())),
    _keysMap: {
      accessTokens: "access_tokens",
    },
  });
