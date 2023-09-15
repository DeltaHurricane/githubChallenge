import { useAppSelector } from '../../../store/hooks';
import { selectRepos } from '../../../store/slices/user.slice';
import { Repo, RepoDescript, RepoLink, RepoProp, ReposBox } from '../styled';

export const Repos = () => {
  const repos = useAppSelector(selectRepos);

  return(
    <>
      <h2 style={{width:"100%"}}>• Repos:</h2>
      <ReposBox>
        {repos.map((repo)=>{
          return (
            <Repo key={repo.name}>
              <RepoProp> • Name: <RepoDescript>{repo.name}</RepoDescript></RepoProp>
              <RepoProp> • Description: <RepoDescript>{repo.description ?? 'none'}</RepoDescript></RepoProp>
              <RepoProp>• Url: <RepoLink  href={repo.html_url} target="_blank">{repo.html_url}</RepoLink></RepoProp>
            </Repo>
          )
        })
        }
      </ReposBox>
    </>
  )
};

