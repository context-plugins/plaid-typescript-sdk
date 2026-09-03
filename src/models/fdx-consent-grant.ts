import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentGrantResourceSchema, type FdxConsentGrantResource } from "./fdx-consent-grant-resource.js";
import { fdxConsentGrantStatusSchema, type FdxConsentGrantStatus } from "./fdx-consent-grant-status.js";
import { partyEntitySchema, type PartyEntity } from "./party-entity.js";

export type FdxConsentGrant = {
  id: string;
  status: FdxConsentGrantStatus;
  createdTime: Date;
  updatedTime: Date;
  expirationTime?: Date;
  parties: PartyEntity[];
  resources?: FdxConsentGrantResource[];
};

export const fdxConsentGrantSchema: Schema<FdxConsentGrant> = s.object<FdxConsentGrant>({
  id: s.string(),
  status: fdxConsentGrantStatusSchema,
  createdTime: s.dateTime(),
  updatedTime: s.dateTime(),
  expirationTime: s.optional(s.dateTime()),
  parties: s.array(s.lazy(() => partyEntitySchema)),
  resources: s.optional(s.array(s.lazy(() => fdxConsentGrantResourceSchema))),
});
