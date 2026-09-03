import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProviderBusinessName = {
  isPrimary: boolean;
  name: string | null;
};

export const providerBusinessNameSchema: Schema<ProviderBusinessName> = s.object<ProviderBusinessName>({
  isPrimary: s.boolean(),
  name: s.nullable(s.string()),
  _keysMap: {
    isPrimary: "is_primary",
  },
});
