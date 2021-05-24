import { _b } from '@ctx-core/object';
import { _last } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { layer_a1_b } from './layer_a1_b';
const key = 'top_layer';
export const top_layer_b = _b(key, ctx => derived$(layer_a1_b(ctx), $layer_a1 => _last($layer_a1)));
