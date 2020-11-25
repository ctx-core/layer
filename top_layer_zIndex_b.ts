import { derived, Readable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
import { _andand } from '@ctx-core/function'
import { top_layer_b } from './top_layer_b'
export const top_layer_zIndex_b = _b<zIndex__top__layer>('top_layer_zIndex', ctx=>
	derived(
		top_layer_b(ctx),
		_andand('zIndex')))
export type $zIndex__top__layer = number
export type zIndex__top__layer = Readable<$zIndex__top__layer>
