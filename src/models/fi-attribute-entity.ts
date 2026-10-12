import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Financial Institution provider-specific attribute */
export type FiAttributeEntity = {
  /** Name of attribute */
  name: string;
  /** Value of attribute */
  value: string;
};

export const fiAttributeEntitySchema: Schema<FiAttributeEntity> = s.object<FiAttributeEntity>({
  name: s.string(),
  value: s.string(),
});
