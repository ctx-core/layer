import { _b } from '@ctx-core/object'
import { _last__a1 } from '@ctx-core/array'
import { derived } from '@ctx-core/store'
import { layer_a1_b } from './layer_a1_b'
export const top_layer_b = _b('top_layer', ctx=>
	derived(
		layer_a1_b(ctx),
		layers=>
			_last__a1(layers)))
