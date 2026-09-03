import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type Individual = {
  name: Name;
};

export const individualSchema: Schema<Individual> = s.object<Individual>({
  name: nameSchema,
  _keysMap: {
    name: "NAME",
  },
});
