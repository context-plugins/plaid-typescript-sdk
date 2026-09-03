import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationCreateRequestOptionsSchema,
  type IncomeVerificationCreateRequestOptions,
} from "./income-verification-create-request-options.js";

export type IncomeVerificationCreateRequest = {
  clientId?: string;
  secret?: string;
  webhook: string;
  precheckId?: string;
  options?: IncomeVerificationCreateRequestOptions;
};

export const incomeVerificationCreateRequestSchema: Schema<IncomeVerificationCreateRequest> =
  s.object<IncomeVerificationCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    webhook: s.string(),
    precheckId: s.optional(s.string()),
    options: s.optional(s.lazy(() => incomeVerificationCreateRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      precheckId: "precheck_id",
    },
  });
