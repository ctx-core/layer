import { be_ } from '@ctx-core/object';
import { last_ } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { layer_a$_b } from './layer_a$_b';
const key = 'top_layer$';
export const top_layer$_b = be_(key, ctx => derived$(layer_a$_b(ctx), layer_a => last_(layer_a)));
//# sourceMappingURL=src/top_layer$_b.js.map