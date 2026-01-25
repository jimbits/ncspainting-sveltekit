/// <reference types="@sveltejs/kit" />

declare module '*.svg?component' {
  import { SvelteComponentTyped } from 'svelte';
  export default class extends SvelteComponentTyped<{
    class?: string;
    [key: string]: any;
  }> {}
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module '*.svg?raw' {
  const content: string;
  export default content;
}
