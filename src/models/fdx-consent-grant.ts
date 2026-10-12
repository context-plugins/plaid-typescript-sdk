import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentGrantResourceSchema, type FdxConsentGrantResource } from "./fdx-consent-grant-resource.js";
import { fdxConsentGrantStatusSchema, type FdxConsentGrantStatus } from "./fdx-consent-grant-status.js";
import { partyEntitySchema, type PartyEntity } from "./party-entity.js";

/** An FDX consent grant. */
export type FdxConsentGrant = {
  /** The persistent identifier of the consent grant */
  id: string;
  /** Current status of a consent grant. One of `ACTIVE`, `REVOKED`, `EXPIRED`. */
  status: FdxConsentGrantStatus;
  /** When the consent was initially granted */
  createdTime: Date;
  /** When the consent grant was last updated */
  updatedTime: Date;
  /** When the consent grant will expire. Omitted when the grant has no expiration. */
  expirationTime?: Date;
  /**
   * Non-end-user parties participating in the consent grant (Data Recipient, Data Provider, Data
   * Access Platform).
   */
  parties: PartyEntity[];
  /** Permissioned resource entries. Omitted when there are no resources. */
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
