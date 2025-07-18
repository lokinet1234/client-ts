# ConversationEventsData


## Supported Types

### `components.AgentHandoffDoneEvent`

```typescript
const value: components.AgentHandoffDoneEvent = {
  id: "<id>",
  nextAgentId: "<id>",
  nextAgentName: "<value>",
};
```

### `components.AgentHandoffStartedEvent`

```typescript
const value: components.AgentHandoffStartedEvent = {
  id: "<id>",
  previousAgentId: "<id>",
  previousAgentName: "<value>",
};
```

### `components.ResponseDoneEvent`

```typescript
const value: components.ResponseDoneEvent = {
  usage: {},
};
```

### `components.ResponseErrorEvent`

```typescript
const value: components.ResponseErrorEvent = {
  message: "<value>",
  code: 536579,
};
```

### `components.ResponseStartedEvent`

```typescript
const value: components.ResponseStartedEvent = {
  conversationId: "<id>",
};
```

### `components.FunctionCallEvent`

```typescript
const value: components.FunctionCallEvent = {
  id: "<id>",
  name: "<value>",
  toolCallId: "<id>",
  arguments: "<value>",
};
```

### `components.MessageOutputEvent`

```typescript
const value: components.MessageOutputEvent = {
  id: "<id>",
  content: {
    type: "tool_reference",
    tool: "web_search_premium",
    title: "<value>",
  },
};
```

### `components.ToolExecutionDeltaEvent`

```typescript
const value: components.ToolExecutionDeltaEvent = {
  id: "<id>",
  name: "image_generation",
  arguments: "<value>",
};
```

### `components.ToolExecutionDoneEvent`

```typescript
const value: components.ToolExecutionDoneEvent = {
  id: "<id>",
  name: "web_search_premium",
};
```

### `components.ToolExecutionStartedEvent`

```typescript
const value: components.ToolExecutionStartedEvent = {
  id: "<id>",
  name: "web_search",
  arguments: "<value>",
};
```

