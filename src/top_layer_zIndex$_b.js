import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { top_layer$_b } from './top_layer$_b';
const key = 'top_layer_zIndex$';
export const top_layer_zIndex$_b = be_(key, ctx => derived$(top_layer$_b(ctx), top_layer => top_layer === null || top_layer === void 0 ? void 0 : top_layer.zIndex));
//# sourceMappingURL=src/top_layer_zIndex$_b.js.map