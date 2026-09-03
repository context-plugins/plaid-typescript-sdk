import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { institutionSchema, type Institution } from "./institution.js";

export type InstitutionsGetResponse = {
  institutions: Institution[];
  total: number;
  requestId: string;
};

export const institutionsGetResponseSchema: Schema<InstitutionsGetResponse> =
  s.object<InstitutionsGetResponse>({
    institutions: s.array(s.lazy(() => institutionSchema)),
    total: s.number(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
