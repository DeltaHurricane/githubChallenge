import { useAppSelector } from '../../store/hooks';
import { selectRepos } from '../../store/slices/user.slice';
import { ReposBox } from './styled';

export const Repos = () => {
  const repos = useAppSelector(selectRepos);

  return(
    <>
      <h2>Repos:</h2>
      <ReposBox>
        {repos.map((repo)=>{
          return (<a key={repo.name} href={repo.html_url} target="_blank">• {repo.name}</a>)
        })
        }
      </ReposBox>
    </>
  )
};

