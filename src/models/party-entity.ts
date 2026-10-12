import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partyRegistrySchema, type PartyRegistry } from "./party-registry.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

/** FDX Participant - an entity or person that is a part of a FDX API transaction */
export type PartyEntity = {
  /** Human recognizable common name */
  name: string;
  /** Identifies the type of a party */
  type: PartyType;
  /**
   * URI for party, where an end user could learn more about the company or application involved in
   * the data sharing chain
   */
  homeUri?: string;
  /** URI for a logo asset to be displayed to the end user */
  logoUri?: string;
  /** The registry containing the party's registration with name and id */
  registry?: PartyRegistry;
  /** Registered name of party */
  registeredEntityName?: string;
  /** Registered id of party */
  registeredEntityId?: string;
};

export const partyEntitySchema: Schema<PartyEntity> = s.object<PartyEntity>({
  name: s.string(),
  type: partyTypeSchema,
  homeUri: s.optional(s.string()),
  logoUri: s.optional(s.string()),
  registry: s.optional(s.lazy(() => partyRegistrySchema)),
  registeredEntityName: s.optional(s.string()),
  registeredEntityId: s.optional(s.string()),
});
