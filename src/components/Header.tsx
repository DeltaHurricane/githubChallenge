import { Link } from 'react-router-dom';
import styled from '@emotion/styled'


const HeaderBar = styled.ul`
  background-color: #2f43c740;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px black solid;
`
const HeaderItem = styled.li`
  color: #858a33;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
`

export function Header() {
  return (
    <>
      <HeaderBar>
        <HeaderItem>
          <Link to="/" style={{color:'inherit'}}>Search</Link>
        </HeaderItem>
        <HeaderItem>
          <Link to="/history" style={{color:'inherit'}}>History</Link>
        </HeaderItem>
      </HeaderBar>
    </>
  )
}

