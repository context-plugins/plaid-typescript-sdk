import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { consentEventCodeSchema, type ConsentEventCode } from "./consent-event-code.js";
import { consentEventInitiatorSchema, type ConsentEventInitiator } from "./consent-event-initiator.js";
import { consentEventTypeSchema, type ConsentEventType } from "./consent-event-type.js";
import { consentedAccountSchema, type ConsentedAccount } from "./consented-account.js";

export type ConsentEvent = {
  itemId?: string;
  createdAt?: Date;
  eventType?: ConsentEventType;
  eventCode?: ConsentEventCode;
  institutionId?: string | null;
  institutionName?: string | null;
  initiator?: ConsentEventInitiator;
  consentedUseCases?: string[];
  consentedDataScopes?: string[];
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
