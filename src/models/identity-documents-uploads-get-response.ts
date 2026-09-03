import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountIdentityDocumentUploadSchema,
  type AccountIdentityDocumentUpload,
} from "./account-identity-document-upload.js";
import { itemSchema, type Item } from "./item.js";

export type IdentityDocumentsUploadsGetResponse = {
  accounts: AccountIdentityDocumentUpload[];
  item: Item;
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
