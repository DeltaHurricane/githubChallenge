import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUser, selectUser, selectStatus } from '../../store/slices/user.slice';
import { ERequestStatus } from '../../common/request';
import { Repos } from './Repos';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Loader, NiceButton } from '../../components';
import { PageBox, SearchInput, Form, UserBox, UserAvatar, PersonalBox, ColumnsBox, UserBio } from './styled';

const Search = () => {
  const [search, setSearch] = useState('')
  const user = useAppSelector(selectUser);
  const userStatus = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  function handleOnChange(e:ChangeEvent<HTMLInputElement>){
    setSearch(e.target.value)
  }

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    if(search){
      dispatch(fetchUser(search))
      setSearch('')
    }
  }

  return(
    <PageBox >
      <h2>Search for github user below:</h2>
      <Form onSubmit={handleSubmit}>
        <SearchInput value={search} onChange={handleOnChange}></SearchInput>
        <NiceButton type="submit">
          Get user
        </NiceButton>
      </Form>
      
      {userStatus === ERequestStatus.FAILED && <p>There was an error looking for the user, please check the username</p>}
      {userStatus === ERequestStatus.LOADING && <Loader type='bars' color='black'/>}
      {userStatus === ERequestStatus.SUCCEEDED && !!user &&
      <UserBox>
        <PersonalBox>
          <UserAvatar src={user.avatar_url}></UserAvatar>
          <ColumnsBox>
            {!!user.name?.length &&
            <h4>
            • {user.name}
            </h4>
            }
            <h4>
            • {user.login}
            </h4>
            {!!user.email?.length &&
            <h4>
            • {user.email}
            </h4>
            }
            <a href={user.html_url} target="_blank">• Github</a>
          </ColumnsBox>
        </PersonalBox>
        <UserBio>
          {user.bio}
        </UserBio>
        <Repos />
      </UserBox>
      }
    </PageBox>
  )
};

export default Search;
