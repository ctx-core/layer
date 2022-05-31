import { last_ } from '@ctx-core/array'
import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { Layer, layer_a__ } from './layer_a__.js'
export const top_layer__:B<ReadableAtom_<Layer|undefined>> = be_('top_layer__', ctx=>
	computed_(
		layer_a__(ctx),
		layer_a=>
			last_(layer_a)))
export { top_layer__ as top_layer$_ }
