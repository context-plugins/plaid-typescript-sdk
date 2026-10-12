import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plaidErrorTypeSchema, type PlaidErrorType } from "./plaid-error-type.js";

/**
 * An error object and associated `item_id` used to identify a specific Item and error when a batch
 * operation operating on multiple Items has encountered an error in one of the Items.
 */
export type Cause = {
  /** A broad categorization of the error. Safe for programmatic use. */
  errorType: PlaidErrorType;
  /** The particular error code. Safe for programmatic use. */
  errorCode: string;
  /**
   * The specific reason for the error code. Currently, reasons are only supported for OAuth-based
   * item errors; `null` will be returned otherwise. Safe for programmatic use.
   *
   * Possible values: `OAUTH_INVALID_TOKEN`: The user's OAuth connection to this institution has
   * been invalidated.
   *
   * `OAUTH_CONSENT_EXPIRED`: The user's access consent for this OAuth connection to this
   * institution has expired.
   *
   * `OAUTH_USER_REVOKED`: The user's OAuth connection to this institution is invalid because the
   * user revoked their connection.
   */
  errorCodeReason?: string | null;
  /**
   * A developer-friendly representation of the error code. This may change over time and is not
   * safe for programmatic use.
   */
  errorMessage: string;
  /**
   * A user-friendly representation of the error code. `null` if the error is not related to user
   * action.
   *
   * This may change over time and is not safe for programmatic use.
   */
  displayMessage: string | null;
  /**
   * A unique ID identifying the request, to be used for troubleshooting purposes. This field will
   * be omitted in errors provided by webhooks.
   */
  requestId?: string;
  /**
   * In this product, a request can pertain to more than one Item. If an error is returned for such
   * a request, `causes` will return an array of errors containing a breakdown of these errors on
   * the individual Item level, if any can be identified.
   *
   * `causes` will be provided for the `error_type` `ASSET_REPORT_ERROR` or `CHECK_REPORT_ERROR`.
   * `causes` will also not be populated inside an error nested within a `warning` object.
   */
  causes?: Record<string, unknown>[];
  /**
   * The HTTP status code associated with the error. This will only be returned in the response body
   * when the error information is provided via a webhook.
   */
  status?: number | null;
  /** The URL of a Plaid documentation page with more information about the error */
  documentationUrl?: string;
  /** Suggested steps for resolving the error */
  suggestedAction?: string | null;
  /**
   * A list of the account subtypes that were requested via the `account_filters` parameter in
   * `/link/token/create`. Currently only populated for `NO_ACCOUNTS` errors from Items with
   * `investments_auth` as an enabled product.
   */
  requiredAccountSubtypes?: string[];
  /**
   * A list of the account subtypes that were extracted but did not match the requested subtypes via
   * the `account_filters` parameter in `/link/token/create`. Currently only populated for
   * `NO_ACCOUNTS` errors from Items with `investments_auth` as an enabled product.
   */
  providedAccountSubtypes?: string[];
  /** The `item_id` of the Item associated with this webhook, warning, or error */
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
  status: s.optionalNullable(s.int()),
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
