import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { top_layer__ } from './top_layer__.js'
export const top_layer_zIndex__ = be_<ReadableAtom_<number|null>>('top_layer_zIndex__', ctx=>
	computed_(
		top_layer__(ctx),
		top_layer=>top_layer ? top_layer.zIndex : null))
export { top_layer_zIndex__ as top_layer_zIndex$_ }
