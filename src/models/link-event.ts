import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkEventMetadataSchema, type LinkEventMetadata } from "./link-event-metadata.js";

export type LinkEvent = {
  eventName: string;
  timestamp: string;
  eventId: string;
  eventMetadata: LinkEventMetadata;
};

export const linkEventSchema: Schema<LinkEvent> = s.object<LinkEvent>({
  eventName: s.string(),
  timestamp: s.string(),
  eventId: s.string(),
  eventMetadata: linkEventMetadataSchema,
  _keysMap: {
    eventName: "event_name",
    eventId: "event_id",
    eventMetadata: "event_metadata",
  },
});
