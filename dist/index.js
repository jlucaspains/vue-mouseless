import MouseTrap from 'mousetrap';
export const hotKey = {
    bind(el, binding, vnode) {
        const focus = binding && binding.modifiers && binding.modifiers.focus;
        // el might not be present for server-side rendering.
        if (el) {
            MouseTrap.bind(binding.value, (e) => {
                if (focus) {
                    el.focus();
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
