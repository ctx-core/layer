import { _b } from '@ctx-core/object'
import { _andand } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { top_layer_b } from './top_layer_b'
export const top_layer_zIndex_b = _b('top_layer_zIndex', ctx=>
	derived(
		top_layer_b(ctx),
		_andand('zIndex')
	) as top_layer_zIndex_type
)
export type $top_layer_zIndex_type = number
export interface top_layer_zIndex_type extends Readable<$top_layer_zIndex_type> {}
