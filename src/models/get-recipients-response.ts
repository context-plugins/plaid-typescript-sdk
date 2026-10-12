import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  extendedRecipientMetadataSchema,
  type ExtendedRecipientMetadata,
} from "./extended-recipient-metadata.js";

/** GetRecipientsResponse defines the response schema for `/fdx/recipients` */
export type GetRecipientsResponse = {
  recipients: ExtendedRecipientMetadata[];
};

export const getRecipientsResponseSchema: Schema<GetRecipientsResponse> = s.object<GetRecipientsResponse>({
  recipients: s.array(s.lazy(() => extendedRecipientMetadataSchema)),
});
