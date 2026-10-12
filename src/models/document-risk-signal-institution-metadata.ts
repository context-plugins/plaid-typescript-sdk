import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object which contains additional metadata about the institution used to compute the
 * verification attribute
 */
export type DocumentRiskSignalInstitutionMetadata = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
};

export const documentRiskSignalInstitutionMetadataSchema: Schema<DocumentRiskSignalInstitutionMetadata> =
  s.object<DocumentRiskSignalInstitutionMetadata>({
    itemId: s.string(),
    _keysMap: {
      itemId: "item_id",
    },
  });
