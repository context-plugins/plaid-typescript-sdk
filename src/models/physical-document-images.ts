import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * URLs for downloading original and cropped images for this document submission. The URLs are
 * designed to only allow downloading, not hot linking, so the URL will only serve the document
 * image for 60 seconds before expiring. The expiration time is 60 seconds after the `GET` request
 * for the associated Identity Verification attempt. A new expiring URL is generated with each
 * request, so you can always rerequest the Identity Verification attempt if one of your URLs
 * expires.
 */
export type PhysicalDocumentImages = {
  /**
   * Temporary URL that expires after 60 seconds for downloading the uncropped original image of the
   * front of the document.
   */
  originalFront: string | null;
  /**
   * Temporary URL that expires after 60 seconds for downloading the original image of the back of
   * the document. Might be null if the back of the document was not collected.
   */
  originalBack: string | null;
  /**
   * Temporary URL that expires after 60 seconds for downloading a cropped image containing just the
   * front of the document.
   */
  croppedFront: string | null;
  /**
   * Temporary URL that expires after 60 seconds for downloading a cropped image containing just the
   * back of the document. Might be null if the back of the document was not collected.
   */
  croppedBack: string | null;
  /**
   * Temporary URL that expires after 60 seconds for downloading a crop of just the user's face from
   * the document image. Might be null if the document does not contain a face photo.
   */
  face: string | null;
};

export const physicalDocumentImagesSchema: Schema<PhysicalDocumentImages> = s.object<PhysicalDocumentImages>({
  originalFront: s.nullable(s.string()),
  originalBack: s.nullable(s.string()),
  croppedFront: s.nullable(s.string()),
  croppedBack: s.nullable(s.string()),
  face: s.nullable(s.string()),
  _keysMap: {
    originalFront: "original_front",
    originalBack: "original_back",
    croppedFront: "cropped_front",
    croppedBack: "cropped_back",
  },
});
