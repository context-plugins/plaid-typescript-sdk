import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { institutionSchema, type Institution } from "./institution.js";

/** InstitutionsSearchResponse defines the response schema for `/institutions/search` */
export type InstitutionsSearchResponse = {
  /** An array of institutions matching the search criteria */
  institutions: Institution[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const institutionsSearchResponseSchema: Schema<InstitutionsSearchResponse> =
  s.object<InstitutionsSearchResponse>({
    institutions: s.array(s.lazy(() => institutionSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
