import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentMetadataSchema, type DocumentMetadata } from "./document-metadata.js";
import { errorSchema, type Error } from "./error.js";
import { taxformSchema, type Taxform } from "./taxform.js";

export type IncomeVerificationTaxformsGetResponse = {
  requestId?: string;
  documentMetadata: DocumentMetadata[];
  taxforms: Taxform[];
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
