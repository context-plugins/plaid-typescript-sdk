import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plaidErrorTypeSchema, type PlaidErrorType } from "./plaid-error-type.js";

/**
 * An error object plus the `item_id` of an Item that the end user can repair via Link [update
 * mode](https://plaid.com/docs/link/update-mode). The `error_code` will be in the
 * `ITEM_LOGIN_REQUIRED` family.
 */
export type CheckReportRepairableItem = {
  /** A broad categorization of the error. Safe for programmatic use. */
  errorType: PlaidErrorType;
  /** The particular error code. Safe for programmatic use. */
  errorCode: string;
  /**
   * A developer-friendly representation of the error code. This may change over time and is not
   * safe for programmatic use.
   */
  errorMessage: string;
  /**
   * A user-friendly representation of the error code. `null` if the error is not related to user
   * action.
   */
  displayMessage: string | null;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
};

export const checkReportRepairableItemSchema: Schema<CheckReportRepairableItem> =
  s.object<CheckReportRepairableItem>({
    errorType: plaidErrorTypeSchema,
    errorCode: s.string(),
    errorMessage: s.string(),
    displayMessage: s.nullable(s.string()),
    itemId: s.string(),
    _keysMap: {
      errorType: "error_type",
      errorCode: "error_code",
      errorMessage: "error_message",
      displayMessage: "display_message",
      itemId: "item_id",
    },
  });
