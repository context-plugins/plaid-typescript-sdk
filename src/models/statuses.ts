import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** A collection of STATUS containers. */
export type Statuses = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  status: Status;
};

export const statusesSchema: Schema<Statuses> = s.object<Statuses>({
  status: statusSchema,
  _keysMap: {
    status: "STATUS",
  },
});
