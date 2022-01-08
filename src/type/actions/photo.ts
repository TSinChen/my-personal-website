import { PhotoType } from '../../constants/actions/photo'

export type SetPhotoLink = {
  type: PhotoType.SET_PHOTO_LINK
  payload: string
}

export type PhotoAction = SetPhotoLink
