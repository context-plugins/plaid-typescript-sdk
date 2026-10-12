import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** RefreshResult represents the result status of a user refresh for a specific item. */
export type RefreshResult = {
  /** A unique identifier for the Plaid Item. */
  itemId?: string;
  /** The product for which the refresh was attempted. */
  product?: string;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error?: Error | null;
};

export const refreshResultSchema: Schema<RefreshResult> = s.object<RefreshResult>({
  itemId: s.optional(s.string()),
  product: s.optional(s.string()),
  error: s.optionalNullable(s.lazy(() => errorSchema)),
  _keysMap: {
    itemId: "item_id",
  },
});
