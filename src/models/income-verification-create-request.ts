import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomeVerificationCreateRequestOptionsSchema,
  type IncomeVerificationCreateRequestOptions,
} from "./income-verification-create-request-options.js";

/** IncomeVerificationCreateRequest defines the request schema for `/income/verification/create` */
export type IncomeVerificationCreateRequest = {
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
  /**
   * The URL endpoint to which Plaid should send webhooks related to the progress of the income
   * verification process.
   */
  webhook: string;
  /**
   * The ID of a precheck created with `/income/verification/precheck`. Will be used to improve
   * conversion of the income verification flow.
   */
  precheckId?: string;
  /** Optional arguments for `/income/verification/create` */
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
