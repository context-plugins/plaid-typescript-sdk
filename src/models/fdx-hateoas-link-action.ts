import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FdxHateoasLinkAction = {
  Get: "GET",
  Post: "POST",
  Patch: "PATCH",
  Delete: "DELETE",
  Put: "PUT",
} as const;
export type FdxHateoasLinkAction =
  | (typeof FdxHateoasLinkAction)[keyof typeof FdxHateoasLinkAction]
  | (string & {});

export const fdxHateoasLinkActionSchema: EnumSchema<FdxHateoasLinkAction> =
  s.enumOf<FdxHateoasLinkAction>(FdxHateoasLinkAction);
