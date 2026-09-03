import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemStatusLastWebhook = {
  sentAt?: Date | null;
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
