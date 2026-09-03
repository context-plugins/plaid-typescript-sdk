import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type Statuses = {
  status: Status;
};

export const statusesSchema: Schema<Statuses> = s.object<Statuses>({
  status: statusSchema,
  _keysMap: {
    status: "STATUS",
  },
});
