import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemRemoveReasonCodeSchema, type ItemRemoveReasonCode } from "./item-remove-reason-code.js";

export type ItemRemoveRequest = {
  clientId?: string;
  secret?: string;
  accessToken: string;
  reasonCode?: ItemRemoveReasonCode | null;
  reasonNote?: string | null;
};

export const itemRemoveRequestSchema: Schema<ItemRemoveRequest> = s.object<ItemRemoveRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  reasonCode: s.optionalNullable(s.lazy(() => itemRemoveReasonCodeSchema)),
  reasonNote: s.optionalNullable(s.string()),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
    reasonCode: "reason_code",
    reasonNote: "reason_note",
  },
});
