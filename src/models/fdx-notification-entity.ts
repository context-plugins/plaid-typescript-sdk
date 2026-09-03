import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hateoasLinkSchema, type HateoasLink } from "./hateoas-link.js";
import { notificationCategorySchema, type NotificationCategory } from "./notification-category.js";
import {
  notificationPayloadEntitySchema,
  type NotificationPayloadEntity,
} from "./notification-payload-entity.js";
import { notificationPrioritySchema, type NotificationPriority } from "./notification-priority.js";
import { notificationSeveritySchema, type NotificationSeverity } from "./notification-severity.js";
import { notificationTypeSchema, type NotificationType } from "./notification-type.js";
import { partyEntitySchema, type PartyEntity } from "./party-entity.js";

export type FdxNotificationEntity = {
  notificationId: string;
  type: NotificationType;
  subtype?: string;
  sentOn: Date;
  category: NotificationCategory;
  severity?: NotificationSeverity;
  priority?: NotificationPriority;
  publisher?: PartyEntity;
  subscriber?: PartyEntity;
  notificationPayload: NotificationPayloadEntity;
  url?: HateoasLink;
};

export const fdxNotificationEntitySchema: Schema<FdxNotificationEntity> = s.object<FdxNotificationEntity>({
  notificationId: s.string(),
  type: notificationTypeSchema,
  subtype: s.optional(s.string()),
  sentOn: s.dateTime(),
  category: notificationCategorySchema,
  severity: s.optional(s.lazy(() => notificationSeveritySchema)),
  priority: s.optional(s.lazy(() => notificationPrioritySchema)),
  publisher: s.optional(s.lazy(() => partyEntitySchema)),
  subscriber: s.optional(s.lazy(() => partyEntitySchema)),
  notificationPayload: notificationPayloadEntitySchema,
  url: s.optional(s.lazy(() => hateoasLinkSchema)),
});
