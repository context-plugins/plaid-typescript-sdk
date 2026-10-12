import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the purpose of the uploaded file.
 *
 * `"DUE_DILIGENCE"` - The transfer due diligence document of the originator.
 */
export const Purpose = {
  DueDiligence: "DUE_DILIGENCE",
} as const;
export type Purpose = (typeof Purpose)[keyof typeof Purpose] | (string & {});

export const purposeSchema: EnumSchema<Purpose> = s.enumOf<Purpose>(Purpose);
