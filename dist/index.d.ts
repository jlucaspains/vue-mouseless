import { VNodeDirective, VNode } from 'vue';
export declare const hotKey: {
    bind(el: HTMLElement, binding: VNodeDirective, vnode: VNode): void;
    unbind: (el: HTMLElement, binding: VNodeDirective) => void;
};
