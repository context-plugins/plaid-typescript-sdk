import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta = {
  name: string;
  officialName: string;
  limit: number;
  mask: string;
};

export const metaSchema: Schema<Meta> = s.object<Meta>({
  name: s.string(),
  officialName: s.string(),
  limit: s.number(),
  mask: s.string(),
  _keysMap: {
    officialName: "official_name",
  },
});
