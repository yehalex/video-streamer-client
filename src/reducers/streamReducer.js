import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch(action.type){ 
    case FETCH_STREAM:
      return { ...state, [action.payload.id] : action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id')};
    case CREATE_STREAM:
      return { ...state, [action.payload.id] : action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id] : action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //delete stream action returns id in payload
    default:
      return state;
  }
}

export default streamReducer;