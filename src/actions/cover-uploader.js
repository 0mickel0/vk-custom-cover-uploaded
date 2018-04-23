import { FETCH_UPLOADED_COVER } from '../constatnts/ActionType'

export function fetchUploadedCover(img) {
  return {
    type: FETCH_UPLOADED_COVER,
    payload: img
  };
}