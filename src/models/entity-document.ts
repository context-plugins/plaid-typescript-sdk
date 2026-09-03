import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityDocumentTypeSchema, type EntityDocumentType } from "./entity-document-type.js";

export type EntityDocument = {
  type: EntityDocumentType;
  number: string;
};

export const entityDocumentSchema: Schema<EntityDocument> = s.object<EntityDocument>({
  type: entityDocumentTypeSchema,
  number: s.string(),
});
