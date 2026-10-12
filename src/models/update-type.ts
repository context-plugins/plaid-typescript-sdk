import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether an Item requires user interaction to be updated, which can be the case for
 * Items with some forms of two-factor authentication.
 *
 * `background` - Item can be updated in the background
 *
 * `user_present_required` - Item requires user interaction to be updated
 */
export const UpdateType = {
  Background: "background",
  UserPresentRequired: "user_present_required",
} as const;
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType] | (string & {});

export const updateTypeSchema: EnumSchema<UpdateType> = s.enumOf<UpdateType>(UpdateType);
