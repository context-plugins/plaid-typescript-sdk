import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plaidErrorTypeSchema, type PlaidErrorType } from "./plaid-error-type.js";

export type Cause = {
  errorType: PlaidErrorType;
  errorCode: string;
  errorCodeReason?: string | null;
  errorMessage: string;
  displayMessage: string | null;
  requestId?: string;
  causes?: Record<string, unknown>[];
  status?: number | null;
  documentationUrl?: string;
  suggestedAction?: string | null;
  requiredAccountSubtypes?: string[];
  providedAccountSubtypes?: string[];
  itemId: string;
};

export const causeSchema: Schema<Cause> = s.object<Cause>({
  errorType: plaidErrorTypeSchema,
  errorCode: s.string(),
  errorCodeReason: s.optionalNullable(s.string()),
  errorMessage: s.string(),
  displayMessage: s.nullable(s.string()),
  requestId: s.optional(s.string()),
  causes: s.optional(s.array(s.record(s.string(), s.unknown()))),
  status: s.optionalNullable(s.number()),
  documentationUrl: s.optional(s.string()),
  suggestedAction: s.optionalNullable(s.string()),
  requiredAccountSubtypes: s.optional(s.array(s.string())),
  providedAccountSubtypes: s.optional(s.array(s.string())),
  itemId: s.string(),
  _keysMap: {
    errorType: "error_type",
    errorCode: "error_code",
    errorCodeReason: "error_code_reason",
    errorMessage: "error_message",
    displayMessage: "display_message",
    requestId: "request_id",
    documentationUrl: "documentation_url",
    suggestedAction: "suggested_action",
    requiredAccountSubtypes: "required_account_subtypes",
    providedAccountSubtypes: "provided_account_subtypes",
    itemId: "item_id",
  },
});
