import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliverySessionStatusSchema,
  type LinkDeliverySessionStatus,
} from "./link-delivery-session-status.js";

export type LinkDeliveryGetResponse = {
  status: LinkDeliverySessionStatus;
  createdAt: Date;
  completedAt?: Date | null;
  requestId: string;
  accessTokens?: string[] | null;
  itemIds?: string[] | null;
};

export const linkDeliveryGetResponseSchema: Schema<LinkDeliveryGetResponse> =
  s.object<LinkDeliveryGetResponse>({
    status: linkDeliverySessionStatusSchema,
    createdAt: s.dateTime(),
    completedAt: s.optionalNullable(s.dateTime()),
    requestId: s.string(),
    accessTokens: s.optionalNullable(s.array(s.string())),
    itemIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      createdAt: "created_at",
      completedAt: "completed_at",
      requestId: "request_id",
      accessTokens: "access_tokens",
      itemIds: "item_ids",
    },
  });
