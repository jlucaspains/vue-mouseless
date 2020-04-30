import MouseTrap from 'mousetrap';
export const mouseless = {
    bind(el, binding, vnode) {
        const focus = binding && binding.modifiers && binding.modifiers.focus;
        // el might not be present for server-side rendering.
        if (el) {
            MouseTrap.bind(binding.value instanceof Object ? binding.value.key : binding.value, (e) => {
                if (focus) {
                    el.focus();
                }
                else if (binding.value instanceof Object &&
                    binding.value.action instanceof Function) {
                    binding.value.action();
                }
                else {
                    el.click();
                }
                e.preventDefault();
                e.stopPropagation();
            });
        }
    },
    unbind: (el, binding) => {
        MouseTrap.unbind(binding.value);
    }
};
