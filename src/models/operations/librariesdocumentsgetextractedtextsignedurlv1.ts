/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LibrariesDocumentsGetExtractedTextSignedUrlV1Request = {
  libraryId: string;
  documentId: string;
};

/** @internal */
export const LibrariesDocumentsGetExtractedTextSignedUrlV1Request$inboundSchema:
  z.ZodType<
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request,
    z.ZodTypeDef,
    unknown
  > = z.object({
    library_id: z.string(),
    document_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "library_id": "libraryId",
      "document_id": "documentId",
    });
  });

/** @internal */
export type LibrariesDocumentsGetExtractedTextSignedUrlV1Request$Outbound = {
  library_id: string;
  document_id: string;
};

/** @internal */
export const LibrariesDocumentsGetExtractedTextSignedUrlV1Request$outboundSchema:
  z.ZodType<
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request$Outbound,
    z.ZodTypeDef,
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request
  > = z.object({
    libraryId: z.string(),
    documentId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      libraryId: "library_id",
      documentId: "document_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LibrariesDocumentsGetExtractedTextSignedUrlV1Request$ {
  /** @deprecated use `LibrariesDocumentsGetExtractedTextSignedUrlV1Request$inboundSchema` instead. */
  export const inboundSchema =
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request$inboundSchema;
  /** @deprecated use `LibrariesDocumentsGetExtractedTextSignedUrlV1Request$outboundSchema` instead. */
  export const outboundSchema =
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request$outboundSchema;
  /** @deprecated use `LibrariesDocumentsGetExtractedTextSignedUrlV1Request$Outbound` instead. */
  export type Outbound =
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request$Outbound;
}

export function librariesDocumentsGetExtractedTextSignedUrlV1RequestToJSON(
  librariesDocumentsGetExtractedTextSignedUrlV1Request:
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request,
): string {
  return JSON.stringify(
    LibrariesDocumentsGetExtractedTextSignedUrlV1Request$outboundSchema.parse(
      librariesDocumentsGetExtractedTextSignedUrlV1Request,
    ),
  );
}

export function librariesDocumentsGetExtractedTextSignedUrlV1RequestFromJSON(
  jsonString: string,
): SafeParseResult<
  LibrariesDocumentsGetExtractedTextSignedUrlV1Request,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      LibrariesDocumentsGetExtractedTextSignedUrlV1Request$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'LibrariesDocumentsGetExtractedTextSignedUrlV1Request' from JSON`,
  );
}
