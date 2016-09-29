## Bug

When mounting a stateless function component with enzyme, the component name is
preserved when running `jest`, but not when running `jest --coverage`. This is
causing unit tests to fail when generating coverage that otherwise succeed.

For example, when mounting the component

```jsx
const Foo = () => <div>Foo</div>
```

results in

```jsx
<Foo>
  <div>
    Foo
  </div>
</Foo>
```

but when generating coverage, it results in

```jsx
<Component>
  <div>
    Foo
  </div>
</Component>
```

## Reproducing

Unit tests succeed with:

```
npm test
```

They fail with:

```
npm test -- --coverage
```
