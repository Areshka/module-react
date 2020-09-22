import React from 'react';

import User from './User';
import Header from '../Header';
import { WrapperContent } from '../Wrapper/Wrapper'
import { ReactComponent as UsersNotFoundImg } from '../../images/icon_not_user.svg'

import { NoUsersBlock } from './styled'

const Users = () => {
  const users = [
    {
      name: "Petya",
    }
  ]

  return (
    <>
      <Header />
      <WrapperContent>
        {users.length ?
          <div className='users'>
            <User />
            <User />
            <User />
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