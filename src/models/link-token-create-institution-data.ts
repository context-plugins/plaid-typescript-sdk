import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateInstitutionData = {
  routingNumber?: string;
};

export const linkTokenCreateInstitutionDataSchema: Schema<LinkTokenCreateInstitutionData> =
  s.object<LinkTokenCreateInstitutionData>({
    routingNumber: s.optional(s.string()),
    _keysMap: {
      routingNumber: "routing_number",
    },
  });
