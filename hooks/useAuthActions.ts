import {useDispatch} from 'react-redux';
import {authorize, logout} from '../slices/auth';
import {bindActionCreators} from 'redux';
import {useMemo} from 'react';

export default function useAuthActions() {
  const dispatch = useDispatch();
  //   return {
  //     authorize: (user: User) => dispatch(authorize(user)),
  //     logout: () => dispatch(logout()),
  //   };
  return useMemo(
    () => bindActionCreators({authorize, logout}, dispatch),
    [dispatch],
  );
}
