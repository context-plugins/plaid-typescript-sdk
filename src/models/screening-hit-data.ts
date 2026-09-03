import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  genericScreeningHitLocationItemsSchema,
  type GenericScreeningHitLocationItems,
} from "./generic-screening-hit-location-items.js";
import {
  screeningHitDateOfBirthItemSchema,
  type ScreeningHitDateOfBirthItem,
} from "./screening-hit-date-of-birth-item.js";
import {
  screeningHitDocumentsItemsSchema,
  type ScreeningHitDocumentsItems,
} from "./screening-hit-documents-items.js";
import { screeningHitNamesItemsSchema, type ScreeningHitNamesItems } from "./screening-hit-names-items.js";

export type ScreeningHitData = {
  datesOfBirth?: ScreeningHitDateOfBirthItem[];
  documents?: ScreeningHitDocumentsItems[];
  locations?: GenericScreeningHitLocationItems[];
  names?: ScreeningHitNamesItems[];
};

export const screeningHitDataSchema: Schema<ScreeningHitData> = s.object<ScreeningHitData>({
  datesOfBirth: s.optional(s.array(s.lazy(() => screeningHitDateOfBirthItemSchema))),
  documents: s.optional(s.array(s.lazy(() => screeningHitDocumentsItemsSchema))),
  locations: s.optional(s.array(s.lazy(() => genericScreeningHitLocationItemsSchema))),
  names: s.optional(s.array(s.lazy(() => screeningHitNamesItemsSchema))),
  _keysMap: {
    datesOfBirth: "dates_of_birth",
  },
});
