import { UserAvatar, PersonalBox, ColumnsBox, UserBio } from '../styled';
import { useAppSelector } from '../../../store/hooks';
import { selectUser } from '../../../store/slices/user.slice';

const User = () => {
  const user = useAppSelector(selectUser);

  return(
    <>
      <PersonalBox>
        <UserAvatar src={user?.avatar_url}></UserAvatar>
        <ColumnsBox>
          {!!user?.name?.length &&
            <h4>
            • {user?.name}
            </h4>
          }
          <h4>
            • {user?.login}
          </h4>
          {!!user?.email?.length &&
            <h4>
            • {user?.email}
            </h4>
          }
          <a href={user?.html_url} target="_blank">• Github</a>
        </ColumnsBox>
      </PersonalBox>
      <UserBio>
        {user?.bio}
      </UserBio>
    </>
   
  )
};

export default User;
