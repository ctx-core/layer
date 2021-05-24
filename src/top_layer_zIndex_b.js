import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { top_layer_b } from './top_layer_b';
const key = 'top_layer_zIndex';
export const top_layer_zIndex_b = _b(key, ctx => derived$(top_layer_b(ctx), $top_layer => $top_layer === null || $top_layer === void 0 ? void 0 : $top_layer.zIndex));
