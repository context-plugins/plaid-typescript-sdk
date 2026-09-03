import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { institutionSchema, type Institution } from "./institution.js";

export type InstitutionsGetByIdResponse = {
  institution: Institution;
  requestId: string;
};

export const institutionsGetByIdResponseSchema: Schema<InstitutionsGetByIdResponse> =
  s.object<InstitutionsGetByIdResponse>({
    institution: institutionSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
