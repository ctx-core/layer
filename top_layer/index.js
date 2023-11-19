import { last_ } from '@ctx-core/array'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { layer_a_ } from '../layer/index.js'
/** @type {typeof import('./index.d.ts').top_layer__} */
export const [
	top_layer$_,
	top_layer_,
] = be_computed_pair_(ctx=>
	last_(layer_a_(ctxo)))
	.config({ id: 'top_layer' })
export { top_layer$_ as top_layer__ }
