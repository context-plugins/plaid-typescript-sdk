import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentMetadataSchema, type DocumentMetadata } from "./document-metadata.js";
import { errorSchema, type Error } from "./error.js";
import { paystubSchema, type Paystub } from "./paystub.js";

export type IncomeVerificationPaystubsGetResponse = {
  documentMetadata?: DocumentMetadata[];
  paystubs: Paystub[];
  error?: Error | null;
  requestId: string;
};

export const incomeVerificationPaystubsGetResponseSchema: Schema<IncomeVerificationPaystubsGetResponse> =
  s.object<IncomeVerificationPaystubsGetResponse>({
    documentMetadata: s.optional(s.array(s.lazy(() => documentMetadataSchema))),
    paystubs: s.array(s.lazy(() => paystubSchema)),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    requestId: s.string(),
    _keysMap: {
      documentMetadata: "document_metadata",
      requestId: "request_id",
    },
  });
