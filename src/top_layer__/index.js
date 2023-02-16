import { last_ } from '@ctx-core/array'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { layer_a__ } from '../layer_a__/index.js'
/** @type {typeof import('./index.d.ts').top_layer__} */
export const top_layer__ = be_('top_layer__', ctx=>
	computed_(layer_a__(ctx),
		layer_a=>
			last_(layer_a)))
export { top_layer__ as top_layer$_ }
