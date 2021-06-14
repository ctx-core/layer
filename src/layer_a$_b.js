import { be_, assign } from '@ctx-core/object';
import { _difference, _union } from '@ctx-core/array';
import { throw_invalid_state } from '@ctx-core/error';
import { get, writable$ } from '@ctx-core/store';
import { top_layer_zIndex$_b } from './top_layer_zIndex$_b';
const key = 'layer_a$';
export const layer_a$_b = be_(key, ctx => {
    const layer_a = writable$([]);
    return assign(layer_a, {
        push_layer_a,
        unshift_layer_a,
        remove_layer_a,
    });
    function push_layer_a(...in_layer_a) {
        const layer_top_zIndex = top_layer_zIndex$_b(ctx).$;
        for (let j = 0; j < in_layer_a.length; j++) {
            const layer = in_layer_a[j];
            const { zIndex } = layer;
            if (Number.isFinite(zIndex)) {
                if (layer_top_zIndex != null && zIndex <= layer_top_zIndex) {
                    throw_invalid_state({
                        key: 'layers',
                        reason: `zIndex must be greater than store.zIndex__top__layer('layers')`
                    });
                }
            }
            else {
                layer.zIndex =
                    isNaN(layer_top_zIndex)
                        ? 1
                        : layer_top_zIndex + 1;
            }
        }
        const layers = get(layer_a).slice(0);
        layers.push(...in_layer_a);
        layer_a.set(layers);
    }
    function unshift_layer_a(...in_layer_a) {
        layer_a.set(_union([
            in_layer_a,
            get(layer_a) || []
        ]));
    }
    function remove_layer_a(...in_layer_a) {
        layer_a.set(_difference([
            in_layer_a,
            get(layer_a).slice(0)
        ]));
    }
});
export { layer_a$_b as b__a1__layer };
//# sourceMappingURL=src/layer_a$_b.js.map