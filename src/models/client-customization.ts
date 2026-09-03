import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientCustomization = {
  customEntityId?: string;
};

export const clientCustomizationSchema: Schema<ClientCustomization> = s.object<ClientCustomization>({
  customEntityId: s.optional(s.string()),
  _keysMap: {
    customEntityId: "custom_entity_id",
  },
});
