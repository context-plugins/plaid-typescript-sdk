import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScopesContext = {
  Enrollment: "ENROLLMENT",
  Portal: "PORTAL",
} as const;
export type ScopesContext = (typeof ScopesContext)[keyof typeof ScopesContext] | (string & {});

export const scopesContextSchema: EnumSchema<ScopesContext> = s.enumOf<ScopesContext>(ScopesContext);
