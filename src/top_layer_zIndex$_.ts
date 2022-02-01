import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { top_layer$_ } from './top_layer$_.js'
export const top_layer_zIndex$_:B<top_layer_zIndex$_T> = be_('top_layer_zIndex$', ctx=>
	computed$(
		top_layer$_(ctx),
		top_layer=>top_layer?.zIndex
	) as top_layer_zIndex$_T
)
export type top_layer_zIndex$_T = ReadableAtom$<number>
