import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FiAttributeEntity = {
  name: string;
  value: string;
};

export const fiAttributeEntitySchema: Schema<FiAttributeEntity> = s.object<FiAttributeEntity>({
  name: s.string(),
  value: s.string(),
});
