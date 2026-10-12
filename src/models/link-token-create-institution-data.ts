import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A map containing data used to highlight institutions in Link. */
export type LinkTokenCreateInstitutionData = {
  /**
   * The routing number of the bank to highlight in Link. Note: in rare cases, a single routing
   * number can be associated with multiple institutions, e.g. due to a brokerage using another
   * institution to manage ACH on its sweep accounts. If this happens, the bank will not be
   * highlighted in Link even if the routing number is provided.
   */
  routingNumber?: string;
};

export const linkTokenCreateInstitutionDataSchema: Schema<LinkTokenCreateInstitutionData> =
  s.object<LinkTokenCreateInstitutionData>({
    routingNumber: s.optional(s.string()),
    _keysMap: {
      routingNumber: "routing_number",
    },
  });
