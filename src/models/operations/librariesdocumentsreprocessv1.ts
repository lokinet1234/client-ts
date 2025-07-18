/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LibrariesDocumentsReprocessV1Request = {
  libraryId: string;
  documentId: string;
};

/** @internal */
export const LibrariesDocumentsReprocessV1Request$inboundSchema: z.ZodType<
  LibrariesDocumentsReprocessV1Request,
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
export type LibrariesDocumentsReprocessV1Request$Outbound = {
  library_id: string;
  document_id: string;
};

/** @internal */
export const LibrariesDocumentsReprocessV1Request$outboundSchema: z.ZodType<
  LibrariesDocumentsReprocessV1Request$Outbound,
  z.ZodTypeDef,
  LibrariesDocumentsReprocessV1Request
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
export namespace LibrariesDocumentsReprocessV1Request$ {
  /** @deprecated use `LibrariesDocumentsReprocessV1Request$inboundSchema` instead. */
  export const inboundSchema =
    LibrariesDocumentsReprocessV1Request$inboundSchema;
  /** @deprecated use `LibrariesDocumentsReprocessV1Request$outboundSchema` instead. */
  export const outboundSchema =
    LibrariesDocumentsReprocessV1Request$outboundSchema;
  /** @deprecated use `LibrariesDocumentsReprocessV1Request$Outbound` instead. */
  export type Outbound = LibrariesDocumentsReprocessV1Request$Outbound;
}

export function librariesDocumentsReprocessV1RequestToJSON(
  librariesDocumentsReprocessV1Request: LibrariesDocumentsReprocessV1Request,
): string {
  return JSON.stringify(
    LibrariesDocumentsReprocessV1Request$outboundSchema.parse(
      librariesDocumentsReprocessV1Request,
    ),
  );
}

export function librariesDocumentsReprocessV1RequestFromJSON(
  jsonString: string,
): SafeParseResult<LibrariesDocumentsReprocessV1Request, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      LibrariesDocumentsReprocessV1Request$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LibrariesDocumentsReprocessV1Request' from JSON`,
  );
}
