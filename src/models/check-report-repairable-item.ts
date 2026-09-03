import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plaidErrorTypeSchema, type PlaidErrorType } from "./plaid-error-type.js";

export type CheckReportRepairableItem = {
  errorType: PlaidErrorType;
  errorCode: string;
  errorMessage: string;
  displayMessage: string | null;
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
