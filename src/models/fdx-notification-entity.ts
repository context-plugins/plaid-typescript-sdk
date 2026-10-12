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

/**
 * Provides the base fields of a notification. Clients will read the `type` property to determine
 * the expected notification payload.
 */
export type FdxNotificationEntity = {
  /** Id of notification */
  notificationId: string;
  /** Type of Notification */
  type: NotificationType;
  /**
   * An optional initiator-defined event subtype code or description if the event type needs to be
   * further categorized or described.
   */
  subtype?: string;
  /**
   * ISO 8601 date-time in format 'YYYY-MM-DDThh:mm:ss.nnn[Z|[+|-]hh:mm]' according to [IETF
   * RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)
   */
  sentOn: Date;
  /** Category of Notification */
  category: NotificationCategory;
  /** Severity level of notification */
  severity?: NotificationSeverity;
  /** Priority of notification */
  priority?: NotificationPriority;
  /** FDX Participant - an entity or person that is a part of a FDX API transaction */
  publisher?: PartyEntity;
  /** FDX Participant - an entity or person that is a part of a FDX API transaction */
  subscriber?: PartyEntity;
  /** Custom key-value pairs payload for a notification */
  notificationPayload: NotificationPayloadEntity;
  /** REST application constraint (Hypermedia As The Engine Of Application State) */
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
