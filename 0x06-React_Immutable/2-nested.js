import { getIn, fromJS } from 'immutable';


export default function accessImmutablleObject(object, array) {
	return getIn(fromJS(object), array);
}
