import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentTypesSchema, type ContentTypes } from "./content-types.js";
import { fdxHateoasLinkActionSchema, type FdxHateoasLinkAction } from "./fdx-hateoas-link-action.js";

export type HateoasLink = {
  href: string;
  action?: FdxHateoasLinkAction;
  rel?: string;
  types?: ContentTypes[];
};

export const hateoasLinkSchema: Schema<HateoasLink> = s.object<HateoasLink>({
  href: s.string(),
  action: s.optional(s.lazy(() => fdxHateoasLinkActionSchema)),
  rel: s.optional(s.string()),
  types: s.optional(s.array(s.lazy(() => contentTypesSchema))),
});
