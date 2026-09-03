import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DocumentRiskSignalInstitutionMetadata = {
  itemId: string;
};

export const documentRiskSignalInstitutionMetadataSchema: Schema<DocumentRiskSignalInstitutionMetadata> =
  s.object<DocumentRiskSignalInstitutionMetadata>({
    itemId: s.string(),
    _keysMap: {
      itemId: "item_id",
    },
  });
