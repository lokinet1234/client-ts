# CompletionResponseStreamChoice

## Example Usage

```typescript
import { CompletionResponseStreamChoice } from "@mistralai/mistralai/models/components";

let value: CompletionResponseStreamChoice = {
  index: 998527,
  delta: {},
  finishReason: "stop",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `index`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `delta`                                                                                                                        | [components.DeltaMessage](../../models/components/deltamessage.md)                                                             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `finishReason`                                                                                                                 | [components.CompletionResponseStreamChoiceFinishReason](../../models/components/completionresponsestreamchoicefinishreason.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |