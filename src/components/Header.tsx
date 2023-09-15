import { Link } from 'react-router-dom';
import styled from '@emotion/styled'


const HeaderBar = styled.ul`
  background-color: #ffffff;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-bottom: 1px black solid;
`
const HeaderItem = styled.li`
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

