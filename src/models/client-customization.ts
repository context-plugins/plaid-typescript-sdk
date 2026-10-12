import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Custom client fields */
export type ClientCustomization = {
  /**
   * Custom entity ID that maps to a merchant or counterparty. This is different from the
   * `merchant_entity_id` as well as the `entity_id` on the counterparties object to meet client
   * specific needs.
   */
  customEntityId?: string;
};

export const clientCustomizationSchema: Schema<ClientCustomization> = s.object<ClientCustomization>({
  customEntityId: s.optional(s.string()),
  _keysMap: {
    customEntityId: "custom_entity_id",
  },
});
