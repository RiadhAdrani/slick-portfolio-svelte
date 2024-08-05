# dom-router [![CI/CD](https://github.com/RiadhAdrani/dom-router/actions/workflows/checks.yml/badge.svg)](https://github.com/RiadhAdrani/dom-router/actions/workflows/checks.yml) [![npm](https://badgen.net/npm/v/@riadh-adrani/dom-router)](https://www.npmjs.com/package/@riadh-adrani/dom-router)

A web-based `router` that is framework `agnostic`.

---

## Install

add to your project using :

```bash
npm i @riadh-adrani/dom-router
```

## Router class

create a router object that manages and react to location/history changes.

### constructor

```ts
new Router<T>(RouterConfig<T>);
```

> will throw if `base` is invalid; does not start with `/`.

### unload

unload router and perform need actions.

### processPath

process current path and return a `boolean` that indicates if an update should happen or not.

### navigate

navigate to the given destination and perform necessary updates if needed.

### getElementByDepth

get element at a given depth or `undefined` otherwise.

### getPath

get current path, stripped out of base.

### getParams

get closest route params.

### getSearchParams

get current route search query params.

### toHref

transform a destination route to a valid href string or `undefined` otherwise.

## Helpers

### isUrlNavigatable

check if `url` is valid as a relative path

```ts
function isUrlNavigatable(url: string): boolean;
```

## Types

### RouterType

```ts
enum RouterType {
	Browser = 'browser',
	Hash = 'hash'
}
```

### RouterConfig

```ts
interface RouterConfig<T = unknown> {
	/** array of routes that will be considered by the router */
	routes: Array<RawRoute<T>>;
	/** handler that will run each time the url changes */
	onChanged: () => void;
	/** router type, ``Browser`` by default */
	type?: RouterType;
	/** router base, should start with `/` */
	base?: string;
	/** define if the router should scroll the document body to the top */
	correctScrolling?: boolean;
	/** function that will transform a title, useful for setting title prefix and suffixes */
	transformTitle?: (title?: string) => string;
}
```

### IndexRawRoute

```ts
interface IndexRawRoute<T = unknown> {
	path: '';
	name?: string;
	element?: T;
	title?: string;
}
```

### CatchRawRoute

```ts
interface CatchRawRoute<T = unknown> {
	path: '*';
	title?: string;
	element?: T;
}
```

### PathRawRoute

```ts
interface PathRawRoute<T = unknown> {
	path: string;
	name?: string;
	element?: T;
	title?: string;
	children?: Array<RawRoute<T>>;
}
```

### LayoutRawRoute

```ts
interface LayoutRawRoute<T = unknown> {
	element: T;
	children?: Array<RawRoute<T>>;
}
```

### RawRoute

```ts
type RawRoute<T = unknown> =
	| LayoutRawRoute<T>
	| IndexRawRoute<T>
	| CatchRawRoute<T>
	| PathRawRoute<T>;
```

### DestinationOptions

```ts
interface DestinationOptions {
	replace?: boolean;
}
```

### PathDestinationRequest

```ts
type PathDestinationRequest = string;
```

### RelativeDestinationRequest

```ts
type RelativeDestinationRequest = number;
```

### NamedDestinationRequest

```ts
interface NamedDestinationRequest {
	name: string;
	query?: Record<string, string | number>;
	params?: Record<string, string>;
	hash?: string;
}
```

### DestinationRequest

```ts
type DestinationRequest =
	| NamedDestinationRequest
	| PathDestinationRequest
	| RelativeDestinationRequest;
```
