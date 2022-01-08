import { PhotoState } from '../type/reducers/photo'
import { PhotoAction } from '../type/actions/photo'
import { PhotoType } from '../constants/actions/photo'

const defaultState: PhotoState = {
  link: '',
}

export default (state = defaultState, action: PhotoAction) => {
  switch (action.type) {
    case PhotoType.SET_PHOTO_LINK:
      return { ...defaultState, link: action.payload }
    default:
      return state
  }
}
