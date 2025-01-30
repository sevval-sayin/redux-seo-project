import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { login, logout } from '../redux/authSlice';
import { useCallback } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userRole } = useSelector(
    (state) => ({
      isAuthenticated: state.auth.isAuthenticated,
      userRole: state.auth.userRole,
    }),
    shallowEqual
  );

  const loginUser = useCallback((role, token) => {
    dispatch(login({ role, token }));
  }, [dispatch]);

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return { isAuthenticated, userRole, loginUser, logoutUser };
};
