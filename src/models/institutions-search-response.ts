import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { institutionSchema, type Institution } from "./institution.js";

export type InstitutionsSearchResponse = {
  institutions: Institution[];
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
