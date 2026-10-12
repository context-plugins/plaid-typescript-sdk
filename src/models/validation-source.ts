import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type ValidationSource = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  validationSourceName: string | null;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
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
