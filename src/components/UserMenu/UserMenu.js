import React, { useCallback } from 'react';
import './UserMenu.scss';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/default-avatar.png';
import ButtonMenu from '../../components/button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
  <div className="MenuContainer">
    <img src={defaultAvatar} alt="" width="32" className="MenuAvatar" />
    <span className="MenuName">Welcome, {name}</span>
    <ButtonMenu onClick={onLogOut} />
  </div>
  );
};


