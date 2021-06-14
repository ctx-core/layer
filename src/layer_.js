import { assign } from '@ctx-core/object';
/**
 * Returns a new layer.
 */
export function layer_() {
    const layer = assign({
        zIndex: null
    }, ...arguments);
    return layer;
}
//# sourceMappingURL=src/layer_.js.map