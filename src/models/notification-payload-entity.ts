import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxLifecycleEventEntitySchema, type FdxLifecycleEventEntity } from "./fdx-lifecycle-event-entity.js";
import {
  notificationPayloadIdTypeSchema,
  type NotificationPayloadIdType,
} from "./notification-payload-id-type.js";

export type NotificationPayloadEntity = {
  id?: string;
  idType?: NotificationPayloadIdType;
  event?: FdxLifecycleEventEntity;
};

export const notificationPayloadEntitySchema: Schema<NotificationPayloadEntity> =
  s.object<NotificationPayloadEntity>({
    id: s.optional(s.string()),
    idType: s.optional(s.lazy(() => notificationPayloadIdTypeSchema)),
    event: s.optional(s.lazy(() => fdxLifecycleEventEntitySchema)),
  });
