import { last_ } from '@ctx-core/array'
import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { Layer, layer_a$_ } from './layer_a$_.js'
export const top_layer$_:B<top_layer$_T> = be_('top_layer$', ctx=>
	computed_(
		layer_a$_(ctx),
		layer_a=>
			last_(layer_a)))
export type top_layer$_T = ReadableAtom_<Layer|undefined>
