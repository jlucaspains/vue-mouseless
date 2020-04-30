import MouseTrap from 'mousetrap';
import { VNodeDirective, VNode } from 'vue';

export const mouseless = {
    bind(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
        const focus = binding && binding.modifiers && binding.modifiers.focus;

        // el might not be present for server-side rendering.
        if (el) {
            MouseTrap.bind(
                binding.value instanceof Object ? binding.value.key : binding.value,
                (e: ExtendedKeyboardEvent) => {
                    if (focus) {
                        el.focus();
                    } else {
                        el.click();

                        if (
                            binding.value instanceof Object &&
                            binding.value.action instanceof Function
                        ) {
                            binding.value.action();
                        }
                    }
                    e.preventDefault();
                    e.stopPropagation();
                }
            );
        }
    },
    unbind: (el: HTMLElement, binding: VNodeDirective) => {
        MouseTrap.unbind(binding.value);
    }
};
