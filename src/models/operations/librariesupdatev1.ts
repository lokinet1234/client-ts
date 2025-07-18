/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LibrariesUpdateV1Request = {
  libraryId: string;
  libraryInUpdate: components.LibraryInUpdate;
};

/** @internal */
export const LibrariesUpdateV1Request$inboundSchema: z.ZodType<
  LibrariesUpdateV1Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  library_id: z.string(),
  LibraryInUpdate: components.LibraryInUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "library_id": "libraryId",
    "LibraryInUpdate": "libraryInUpdate",
  });
});

/** @internal */
export type LibrariesUpdateV1Request$Outbound = {
  library_id: string;
  LibraryInUpdate: components.LibraryInUpdate$Outbound;
};

/** @internal */
export const LibrariesUpdateV1Request$outboundSchema: z.ZodType<
  LibrariesUpdateV1Request$Outbound,
  z.ZodTypeDef,
  LibrariesUpdateV1Request
> = z.object({
  libraryId: z.string(),
  libraryInUpdate: components.LibraryInUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    libraryId: "library_id",
    libraryInUpdate: "LibraryInUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LibrariesUpdateV1Request$ {
  /** @deprecated use `LibrariesUpdateV1Request$inboundSchema` instead. */
  export const inboundSchema = LibrariesUpdateV1Request$inboundSchema;
  /** @deprecated use `LibrariesUpdateV1Request$outboundSchema` instead. */
  export const outboundSchema = LibrariesUpdateV1Request$outboundSchema;
  /** @deprecated use `LibrariesUpdateV1Request$Outbound` instead. */
  export type Outbound = LibrariesUpdateV1Request$Outbound;
}

export function librariesUpdateV1RequestToJSON(
  librariesUpdateV1Request: LibrariesUpdateV1Request,
): string {
  return JSON.stringify(
    LibrariesUpdateV1Request$outboundSchema.parse(librariesUpdateV1Request),
  );
}

export function librariesUpdateV1RequestFromJSON(
  jsonString: string,
): SafeParseResult<LibrariesUpdateV1Request, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LibrariesUpdateV1Request$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LibrariesUpdateV1Request' from JSON`,
  );
}
