import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxLifecycleEventEntitySchema, type FdxLifecycleEventEntity } from "./fdx-lifecycle-event-entity.js";
import {
  notificationPayloadIdTypeSchema,
  type NotificationPayloadIdType,
} from "./notification-payload-id-type.js";

/** Custom key-value pairs payload for a notification */
export type NotificationPayloadEntity = {
  /** ID for the origination entity related to the notification */
  id?: string;
  /** Type of entity causing origination of a notification */
  idType?: NotificationPayloadIdType;
  /**
   * Details of consent or payment network identifier or other entity's revocation request or other
   * lifecycle status change event
   */
  event?: FdxLifecycleEventEntity;
};

export const notificationPayloadEntitySchema: Schema<NotificationPayloadEntity> =
  s.object<NotificationPayloadEntity>({
    id: s.optional(s.string()),
    idType: s.optional(s.lazy(() => notificationPayloadIdTypeSchema)),
    event: s.optional(s.lazy(() => fdxLifecycleEventEntitySchema)),
  });
