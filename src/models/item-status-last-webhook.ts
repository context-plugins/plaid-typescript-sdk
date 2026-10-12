import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about the last webhook fired for the Item. */
export type ItemStatusLastWebhook = {
  /** [ISO 8601](https://wikipedia.org/wiki/ISO_8601) timestamp of when the webhook was fired. */
  sentAt?: Date | null;
  /** The last webhook code sent. */
  codeSent?: string;
};

export const itemStatusLastWebhookSchema: Schema<ItemStatusLastWebhook> = s.object<ItemStatusLastWebhook>({
  sentAt: s.optionalNullable(s.dateTime()),
  codeSent: s.optional(s.string()),
  _keysMap: {
    sentAt: "sent_at",
    codeSent: "code_sent",
  },
});
