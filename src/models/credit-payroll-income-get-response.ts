import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payrollItemSchema, type PayrollItem } from "./payroll-item.js";

/** Defines the response body for `/credit/payroll_income/get`. */
export type CreditPayrollIncomeGetResponse = {
  /** Array of payroll items. */
  items: PayrollItem[];
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
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const creditPayrollIncomeGetResponseSchema: Schema<CreditPayrollIncomeGetResponse> =
  s.object<CreditPayrollIncomeGetResponse>({
    items: s.array(s.lazy(() => payrollItemSchema)),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
