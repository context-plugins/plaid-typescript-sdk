import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentMetadataSchema, type DocumentMetadata } from "./document-metadata.js";
import { errorSchema, type Error } from "./error.js";
import { taxformSchema, type Taxform } from "./taxform.js";

/**
 * IncomeVerificationTaxformsGetResponse defines the response schema for
 * `/income/verification/taxforms/get`
 */
export type IncomeVerificationTaxformsGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
  documentMetadata: DocumentMetadata[];
  /** A list of forms. */
  taxforms: Taxform[];
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

export const incomeVerificationTaxformsGetResponseSchema: Schema<IncomeVerificationTaxformsGetResponse> =
  s.object<IncomeVerificationTaxformsGetResponse>({
    requestId: s.optional(s.string()),
    documentMetadata: s.array(s.lazy(() => documentMetadataSchema)),
    taxforms: s.array(s.lazy(() => taxformSchema)),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    _keysMap: {
      requestId: "request_id",
      documentMetadata: "document_metadata",
    },
  });
