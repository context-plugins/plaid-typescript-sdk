import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentityDocumentUploadSchema,
  type AccountIdentityDocumentUpload,
} from "./account-identity-document-upload.js";
import { itemSchema, type Item } from "./item.js";

/**
 * IdentityDocumentsUploadsGetResponse defines the response schema for
 * `/identity/documents/uploads/get`
 */
export type IdentityDocumentsUploadsGetResponse = {
  /** The accounts for which Identity data has been requested */
  accounts: AccountIdentityDocumentUpload[];
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const identityDocumentsUploadsGetResponseSchema: Schema<IdentityDocumentsUploadsGetResponse> =
  s.object<IdentityDocumentsUploadsGetResponse>({
    accounts: s.array(s.lazy(() => accountIdentityDocumentUploadSchema)),
    item: itemSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
