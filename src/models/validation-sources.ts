import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { validationSourceSchema, type ValidationSource } from "./validation-source.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type ValidationSources = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  validationSource: ValidationSource[];
};

export const validationSourcesSchema: Schema<ValidationSources> = s.object<ValidationSources>({
  validationSource: s.array(s.lazy(() => validationSourceSchema)),
  _keysMap: {
    validationSource: "VALIDATION_SOURCE",
  },
});
