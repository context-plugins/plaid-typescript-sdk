import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentTypesSchema, type ContentTypes } from "./content-types.js";
import { fdxHateoasLinkActionSchema, type FdxHateoasLinkAction } from "./fdx-hateoas-link-action.js";

/** REST application constraint (Hypermedia As The Engine Of Application State) */
export type HateoasLink = {
  /** URL to invoke the action on the resource */
  href: string;
  /** HTTP Method to use for the request */
  action?: FdxHateoasLinkAction;
  /**
   * Relation of this link to its containing entity, as defined by and with many example relation
   * values at [IETF RFC5988](https://datatracker.ietf.org/doc/html/rfc5988)
   */
  rel?: string;
  /** Content-types that can be used in the Accept header */
  types?: ContentTypes[];
};

export const hateoasLinkSchema: Schema<HateoasLink> = s.object<HateoasLink>({
  href: s.string(),
  action: s.optional(s.lazy(() => fdxHateoasLinkActionSchema)),
  rel: s.optional(s.string()),
  types: s.optional(s.array(s.lazy(() => contentTypesSchema))),
});
