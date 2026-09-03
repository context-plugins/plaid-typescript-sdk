import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ValidationSource = {
  validationSourceName: string | null;
  validationSourceReferenceIdentifier: string | null;
};

export const validationSourceSchema: Schema<ValidationSource> = s.object<ValidationSource>({
  validationSourceName: s.nullable(s.string()),
  validationSourceReferenceIdentifier: s.nullable(s.string()),
  _keysMap: {
    validationSourceName: "ValidationSourceName",
    validationSourceReferenceIdentifier: "ValidationSourceReferenceIdentifier",
  },
});
