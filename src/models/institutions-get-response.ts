import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { institutionSchema, type Institution } from "./institution.js";

/** InstitutionsGetResponse defines the response schema for `/institutions/get` */
export type InstitutionsGetResponse = {
  /** A list of Plaid institutions */
  institutions: Institution[];
  /** The total number of institutions available via this endpoint */
  total: number;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const institutionsGetResponseSchema: Schema<InstitutionsGetResponse> =
  s.object<InstitutionsGetResponse>({
    institutions: s.array(s.lazy(() => institutionSchema)),
    total: s.int(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
