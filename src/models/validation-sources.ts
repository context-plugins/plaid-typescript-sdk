import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { validationSourceSchema, type ValidationSource } from "./validation-source.js";

export type ValidationSources = {
  validationSource: ValidationSource[];
};

export const validationSourcesSchema: Schema<ValidationSources> = s.object<ValidationSources>({
  validationSource: s.array(s.lazy(() => validationSourceSchema)),
  _keysMap: {
    validationSource: "VALIDATION_SOURCE",
  },
});
