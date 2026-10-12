import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Name associated with a business */
export type ProviderBusinessName = {
  /** Indicates whether this is the primary name for the business. */
  isPrimary: boolean;
  /**
   * The name of the business. Must have at least one character and a maximum length of 500
   * characters.
   */
  name: string | null;
};

export const providerBusinessNameSchema: Schema<ProviderBusinessName> = s.object<ProviderBusinessName>({
  isPrimary: s.boolean(),
  name: s.nullable(s.string()),
  _keysMap: {
    isPrimary: "is_primary",
  },
});
