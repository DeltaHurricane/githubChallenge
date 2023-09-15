import { NiceButton } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectHistory } from '../../store/slices/history.slice';
import { fetchUser } from '../../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import { HistoryBox, PageBox } from './styled';


const History = () => {
  const history = useAppSelector(selectHistory)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function navigateToProfile(profileName:string) {
    dispatch(fetchUser(profileName))
    navigate('/')
  }

  console.log(history)
  return (
    <PageBox>
      <h1>Search history:</h1>
      <h3>• Click on a button below to search for that term:</h3>
      {!history.length && <h2 style={{color:'red'}}>No history yet</h2>}
      {history.map((entry:string, index:number)=>{
        return(
          <HistoryBox>
            <h2>{`#${index+1}`}</h2>
            <NiceButton onClick={() => navigateToProfile(entry)}>
              {entry}
            </NiceButton>
          </HistoryBox>
        )
      })}
    </PageBox>
  )};

export default History;
