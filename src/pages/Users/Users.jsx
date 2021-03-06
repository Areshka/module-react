import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import User from './User';
import Header from '../../components/Header';
import { WrapperContent } from '../../components/Wrapper/Wrapper'
import { ReactComponent as UsersNotFoundImg } from '../../assets/images/icons/icon_not_user.svg'

import { getUsersThunk } from '../../store/users/thunks';
import { getCurrentUserSelector, getUsersStateSelector } from '../../store/users/selectors';

import { NoUsersBlock } from './styled';

// custom useUsers Hook
const useUsers = () => {
  const users = useSelector(getUsersStateSelector);
  const { id: currentId } = useSelector(getCurrentUserSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])


  const userList = users.filter(user => user._id !== currentId)
    .map(user => <User key={user._id} user={user} />)

  return { users, userList }
}

// function component Users
const Users = () => {
  const { users, userList } = useUsers();

  return (
    <>
      <Header users />
      <WrapperContent>
        {users.length ?
          <div className='users'>
            {userList}
          </div>
          :
          <NoUsersBlock>
            <UsersNotFoundImg />
            <p>Users not found</p>
          </NoUsersBlock>
        }
      </WrapperContent>
    </>
  );
}

export default Users;