# vue-mouseless
A tiny vue directive to bind shortcut keys using [mousetrap](https://github.com/ccampbell/mousetrap).

## Install
```
npm i vue-mouseless -S
```

## Using locally in a vue component
Typescript:
```ts
<template>
    <input placeholder="Search..." v-mouseless.focus="'. f'" />
    <button v-mouseless="'. s'" @click.prevent="save">Save</button>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mouseless } from "vue-mouseless";

@Component({
  directives: { mouseless }
})
export default class Example extends Vue {
    public save() {
        alert("You either clicked Save or pressed '. s' key sequence");
    }
}
</script>
```

Javascript (es6):
```js
import { mouseless } from "vue-mouseless";

Vue.component('example', {
  template: '
    <input placeholder="Search..." v-mouseless.focus="'. f'" />
    <button v-mouseless="'. s'" @click.prevent="save">Save</button>
  ',
  directives: { mouseless },
  save() {
    alert("You either clicked Save or pressed '. s' key sequence");
  }
})
```

Alternatively you can globally import the directive:

Typescript:
```ts
import { Vue } from "vue-property-decorator";
import { mouseless } from "vue-mouseless";

Vue.directive('mouseless', mouseless);
```

Javascript (es6):
```ts
import { mouseless } from "vue-mouseless";

Vue.directive('mouseless', mouseless);
```

## Focus
Allows to focus a html element when a combination or sequence of keys is matched

```html
<input v-mouseless.focus="'. g'" placeholder="focus on me!" />
```

## Click simulation
This is the default behavior of vue-mouseless. It performs a click on a html component when a combination or sequence of keys is matched. This allows for reuse of the @click functionality already defined in the component.

```html
<button @click="save" v-mouseless="'. g'" />
```

## Coming soon
- [ ] other triggers
- [ ] stop modifier
- [ ] prevent modifier
- [ ] unit tests

## Mousetrap support
All keys supported by Mousetrap are also supported by vue-mouseless. Note that because the directive handle all Mousetrap event, there is currently no way to custom handle events. This may be implemented in the future (PRs are welcome).