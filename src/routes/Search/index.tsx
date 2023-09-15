import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUser, selectStatus } from '../../store/slices/user.slice';
import { ERequestStatus } from '../../common/request';
import { Repos } from './components/Repos';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Loader, NiceButton } from '../../components';
import { PageBox, SearchInput, Form, UserBox } from './styled';
import User from './components/User';

const Search = () => {
  const [search, setSearch] = useState('')
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
      
      {userStatus === ERequestStatus.FAILED && <p>There was an error looking for the user, please try again</p>}
      {userStatus === ERequestStatus.LOADING && <Loader type='bars' color='black'/>}
      {userStatus === ERequestStatus.SUCCEEDED &&
      <UserBox>
        <User/>
        <Repos />
      </UserBox>
      }
    </PageBox>
  )
};

export default Search;
