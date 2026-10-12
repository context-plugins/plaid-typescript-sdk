import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { consentEventCodeSchema, type ConsentEventCode } from "./consent-event-code.js";
import { consentEventInitiatorSchema, type ConsentEventInitiator } from "./consent-event-initiator.js";
import { consentEventTypeSchema, type ConsentEventType } from "./consent-event-type.js";
import { consentedAccountSchema, type ConsentedAccount } from "./consented-account.js";

/** Describes a consent event. */
export type ConsentEvent = {
  /**
   * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same
   * institution twice will result in two Items with different `item_id` values. Like all Plaid
   * identifiers, the `item_id` is case-sensitive.
   */
  itemId?: string;
  /**
   * The date and time when the consent event occurred, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  createdAt?: Date;
  /** A broad categorization of the consent event. */
  eventType?: ConsentEventType;
  /** Codes describing the object of a consent event. */
  eventCode?: ConsentEventCode;
  /**
   * Unique identifier for the institution associated with the Item. Field is `null` for Items
   * created via Same-Day Micro-deposits.
   */
  institutionId?: string | null;
  /**
   * The full name of the institution associated with the Item. Field is `null` for Items created
   * via Same-Day Micro-deposits.
   */
  institutionName?: string | null;
  /** The entity that initiated collection of consent. */
  initiator?: ConsentEventInitiator;
  /**
   * A list of strings containing the full list of use cases the end user has consented to for the
   * Item.
   *
   * See the [full
   * list](https://plaid.com/docs/link/data-transparency-messaging-migration-guide/#updating-link-customizations)
   * of use cases.
   */
  consentedUseCases?: string[];
  /**
   * A list of strings containing the full list of data scopes the end user has consented to for the
   * Item. These correspond to consented products; see the [full
   * mapping](https://plaid.com/docs/link/data-transparency-messaging-migration-guide/#data-scopes-by-product)
   * of data scopes and products.
   */
  consentedDataScopes?: string[];
  /**
   * An array containing the accounts associated with the Item for which authorizations are granted.
   */
  consentedAccounts?: ConsentedAccount[];
};

export const consentEventSchema: Schema<ConsentEvent> = s.object<ConsentEvent>({
  itemId: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  eventType: s.optional(s.lazy(() => consentEventTypeSchema)),
  eventCode: s.optional(s.lazy(() => consentEventCodeSchema)),
  institutionId: s.optionalNullable(s.string()),
  institutionName: s.optionalNullable(s.string()),
  initiator: s.optional(s.lazy(() => consentEventInitiatorSchema)),
  consentedUseCases: s.optional(s.array(s.string())),
  consentedDataScopes: s.optional(s.array(s.string())),
  consentedAccounts: s.optional(s.array(s.lazy(() => consentedAccountSchema))),
  _keysMap: {
    itemId: "item_id",
    createdAt: "created_at",
    eventType: "event_type",
    eventCode: "event_code",
    institutionId: "institution_id",
    institutionName: "institution_name",
    consentedUseCases: "consented_use_cases",
    consentedDataScopes: "consented_data_scopes",
    consentedAccounts: "consented_accounts",
  },
});
