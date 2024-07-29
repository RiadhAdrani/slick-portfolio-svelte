# domer [![CI/CD](https://github.com/RiadhAdrani/domer/actions/workflows/checks.yml/badge.svg)](https://github.com/RiadhAdrani/domer/actions/workflows/checks.yml) [![npm](https://badgen.net/npm/v/@riadh-adrani/domer)](https://www.npmjs.com/package/@riadh-adrani/domer)

A library to build DOM faster.

### Install

Add to your project using :

```bash
npm i @riadh-adrani/domer
```

## Methods

### `setConfig`

Used to set libraries configuration.

```ts
function setConfig(config: LibraryConfig): void;
```

You can reset by calling `setConfig()` without an object.

### `element`

Create a DOM element.

```ts
function element<T = Element>(tag: string, props: CreateElementProps, children: Array<unknown>): T;
```

- `tag` : element tag.
- `props` : object containing attributes and events to be added.
- `children` : an array of elements which will be appended as children.

> to change `namespace`, use `ns` with the desired value as prop. default to `HTML`.

> accepts any children: if it is a `Node`, it will be appended directly, otherwise, a `Text` node will be created.

> applies `class` transformation by default.

> applies `event` transformation by default.

### `text()`

create a `Text` node by transforming data to a `string`.

```ts
function text(data?: unknown): Text;
```

### `setEventListener`

add an event listener to an element.

```ts
function setEventListener(
	key: string,
	event: string,
	value: unknown,
	element: Element,
	modifiers?: Array<EventModifier>
): void;
```

- `key` : a unique identifier of the event.
- `event` : event name like `click`, `input` ...etc
- `value` : usually an event callback. In case of other value, an empty callback will be added instead.
- `element` : target element.
- `modifiers` : an array of all modifiers to be applied. modifiers will be applied in order.

> stores the event's callback inside the element itself in field called `__events__` using `key`, so it can be later used by `removeEventListener`.

> use `key` to register multiple event listener for the same `event`, like `click1` and `click2`.

### `removeEventListener`

remove event listener by its `key` and `event` name.

```ts
function setEventListener(key: string, event: string, element: Element): void;
```

- `key` : a unique identifier of the event.
- `event` : event name like `click`, `input` ...etc
- `element` : target element.

### `setAttribute`

add an attribute to an element.

```ts
function setAttribute(attr: string, value: unknown, el: Element): void;
```

> `style` attribute accept both an `object` and `string`.

> `toggle` attributes will be forced depending on the result of `Boolean(value)`.

### `removeAttribute`

removes an attribute from an element.

```ts
function setAttribute(attr: string, el: Element): void;
```

### `insertNode`

insert node within a parent in a given position.

```ts
function insertNode(node: Node, parent: Node, position?: number): void;
```

> appends node at the end if position is invalid

### `insertNode`

change node position within its parent.

```ts
function changeNodePosition(node: Node, position: number): void;
```

> appends node at the end if position is invalid

### `removeNode`

remove node from the DOM.

```ts
function removeNode(node: Node): void;
```

### `setText`

update `Text` content.

```ts
function setText(data: unknown, node: Text): void;
```

## Helpers

### `attrToProp`

convert an attribute to a DOM property, or camelcase it otherwise.

```ts
function attrToProp(attr: string): string;
```

### `extractEventDetails`

extract event details from a `prop` name.

```ts
function extractEventDetails(
	prop: string
): { event: string; modifiers: Array<EventModifier> } | false;
```

> update config to control which event prop should be accepted.

#### Examples

```ts
// invalid
extractEventDetails('click') == false;

// react style
extractEventDetails('onClick') == { event: 'click', modifiers: [] };

// svelte style
extractEventDetails('on:click') == { event: 'click', modifiers: [] };

// vue style
extractEventDetails('@click') == { event: 'click', modifiers: [] };

// with modifiers
extractEventDetails('@click-stop-prevent') == { event: 'click', modifiers: ['stop', 'prevent'] };
```

### `isClassProp`

check if the given prop is a `class` related prop.

```ts
function isClassProp(prop: string): boolean;
```

> update config to control which class prop should be accepted.

#### Examples

```ts
// invalid
isClassProp('click') == false;

// class
isClassProp('class') == true;

// className
isClassProp('className') == true;

// class directive
isClassProp('class:test') == true;
```

### `resolveClassProps`

resolve class props and return the final class `string`.

```ts
function resolveClassProps(props: Array<{ value: unknown; key: string }>): string;
```

accepts an array of objects containg the following keys:

- `value` : the value of the property. could be a `string`, an `Array<string>` or a `boolean` with class directive.
- `key` : the property/attribute key, like `class`, `className` or `class:*`.

> the props will be sorted in the order : `class` > `className` > `class:*`.

## Types

### `Namespace`

```ts
enum Namespace {
	SVG = 'http://www.w3.org/2000/svg',
	HTML = 'http://www.w3.org/1999/xhtml',
	MATH = 'http://www.w3.org/1998/Math/MathML'
}
```

### `EventModifiers`

```ts
const EventModifiers = ['stop', 'prevent', 'self', 'capture', 'once', 'passive'] as const;
```

### `CreateElementProps`

```ts
interface CreateElementProps extends Record<string, unknown> {
	ns?: string;
}
```

### `EventModifier`

```ts
type EventModifier = (typeof EventModifiers)[number];
```

### `EventHandler`

```ts
type EventHandler = (e: Event) => void;
```

### `LibraryConfig`

```ts
interface LibraryConfig {
	events?: {
		wrapper?: (event: Event, callback: EventHandler) => void;
		syntax?: {
			vue?: boolean;
			svelte?: boolean;
			react?: boolean;
		};
	};
	attributes?: {
		class?: {
			directive?: boolean;
			className?: boolean;
		};
	};
}
```

- `events`

  - `wrapper` : add a wrapper for all inserted event callbacks.
  - `syntax`
    - `vue` : allow vue-style event like `@click` when creating an element. `true` by default.
    - `svelte` : allow svelte-style event like `on:click` when creating an element. `true` by default.
    - `react` : allow react-style event like `onClick` when creating an element. `true` by default.

- `attributes`
  - `class`
    - `directive` : allow class directive. a prop with `class:test` with a value of `true` will be evaluated to `class` of value `test`. `true` by default.
    - `className` : allow `className` value to be appended to the `class` attribute. `true` by default.

### `ElementWithEvents`

```ts
interface ElementWithEvents extends Element {
	__events__: Record<string, EventHandler>;
}
```
