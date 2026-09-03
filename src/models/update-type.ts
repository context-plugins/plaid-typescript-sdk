import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UpdateType = {
  Background: "background",
  UserPresentRequired: "user_present_required",
} as const;
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType] | (string & {});

export const updateTypeSchema: EnumSchema<UpdateType> = s.enumOf<UpdateType>(UpdateType);
