import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { partyRegistrySchema, type PartyRegistry } from "./party-registry.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

export type PartyEntity = {
  name: string;
  type: PartyType;
  homeUri?: string;
  logoUri?: string;
  registry?: PartyRegistry;
  registeredEntityName?: string;
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
