import {combineReducers} from 'redux';
import auth from './auth';
import todos from './todos';

const rootReducer = combineReducers({
  auth,
  todos,
});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정
// RootState => useSelector 사용할 때 타입 참조를 위함
export type RootState = ReturnType<typeof rootReducer>;
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
export default rootReducer;
