import { last_ } from '@ctx-core/array'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { layer_a_ } from '../layer/index.js'
/** @type {typeof import('./index.d.ts').top_layer__} */
export const [
	top_layer$_,
	top_layer_,
] = val__be_computed_pair_('top_layer', ctx=>
	last_(layer_a_(ctxo)))
export { top_layer$_ as top_layer__ }
