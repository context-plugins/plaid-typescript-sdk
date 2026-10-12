import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityScreeningHitDocumentsItemsSchema,
  type EntityScreeningHitDocumentsItems,
} from "./entity-screening-hit-documents-items.js";
import {
  entityScreeningHitEmailsItemsSchema,
  type EntityScreeningHitEmailsItems,
} from "./entity-screening-hit-emails-items.js";
import {
  entityScreeningHitNamesItemsSchema,
  type EntityScreeningHitNamesItems,
} from "./entity-screening-hit-names-items.js";
import {
  entityScreeningHitUrlsItemsSchema,
  type EntityScreeningHitUrlsItems,
} from "./entity-screening-hit-urls-items.js";
import {
  entityScreeningHitsPhoneNumberItemsSchema,
  type EntityScreeningHitsPhoneNumberItems,
} from "./entity-screening-hits-phone-number-items.js";
import {
  genericScreeningHitLocationItemsSchema,
  type GenericScreeningHitLocationItems,
} from "./generic-screening-hit-location-items.js";

/** Information associated with the entity watchlist hit */
export type EntityScreeningHitData = {
  /** Documents associated with the watchlist hit */
  documents?: EntityScreeningHitDocumentsItems[];
  /** Email addresses associated with the watchlist hit */
  emailAddresses?: EntityScreeningHitEmailsItems[];
  /** Locations associated with the watchlist hit */
  locations?: GenericScreeningHitLocationItems[];
  /** Names associated with the watchlist hit */
  names?: EntityScreeningHitNamesItems[];
  /** Phone numbers associated with the watchlist hit */
  phoneNumbers?: EntityScreeningHitsPhoneNumberItems[];
  /** URLs associated with the watchlist hit */
  urls?: EntityScreeningHitUrlsItems[];
};

export const entityScreeningHitDataSchema: Schema<EntityScreeningHitData> = s.object<EntityScreeningHitData>({
  documents: s.optional(s.array(s.lazy(() => entityScreeningHitDocumentsItemsSchema))),
  emailAddresses: s.optional(s.array(s.lazy(() => entityScreeningHitEmailsItemsSchema))),
  locations: s.optional(s.array(s.lazy(() => genericScreeningHitLocationItemsSchema))),
  names: s.optional(s.array(s.lazy(() => entityScreeningHitNamesItemsSchema))),
  phoneNumbers: s.optional(s.array(s.lazy(() => entityScreeningHitsPhoneNumberItemsSchema))),
  urls: s.optional(s.array(s.lazy(() => entityScreeningHitUrlsItemsSchema))),
  _keysMap: {
    emailAddresses: "email_addresses",
    phoneNumbers: "phone_numbers",
  },
});
