import styled from '@emotion/styled'


export const SearchInput = styled.input`
  height: 2rem;
  border: 2px solid #0066cc;
  border-radius: 16px;
  padding-left: 10px;
  padding-right: 10px;
`
export const PageBox = styled.div`
  gap:1rem;
  padding: 1rem;
  display:flex;
  flex-direction: column;
 align-items: center;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 900px) {
    flex-direction: column;
}
`
export const UserBox = styled.div`
  gap:1rem;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  max-width: 50%;
  min-width: 50%;
  box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.75);
  @media screen and (max-width: 900px) {
      min-width: 100%;
      max-width: 100%;
      box-shadow: none;
      padding: 0rem;
  }
`

export const PersonalBox = styled.div`
  background: lightsteelblue;
  width: 100%;
  gap:1rem;
  padding: 2rem;
  display:flex;
  align-items: center;
  border-radius: 20px;
  box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.75);
  @media screen and (max-width: 900px) {
      flex-direction: column;
      padding: 1rem;
      align-items: center;
      justify-content: center;
  }
`
export const ColumnsBox = styled.div`
  width: 100%;
  gap:1rem;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  align-items: left;
  white-space: wrap;
  overflow: hidden;
  @media screen and (max-width: 900px) {
      align-items: center;
  }
`

export const UserAvatar = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 100px;
  box-shadow: 0px 7px 15px -3px rgba(0,0,0,0.75);
`

export const UserBio = styled.p`
 font-size: 1rem;
 font-family:Arial, Helvetica, sans-serif;
 font-weight: bold;
`

export const ReposBox = styled.ul`
  width: 100%;
  display:flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 900px) {
      align-items: left;
      flex-wrap: nowrap;
      flex-direction: column;
  }
  
`

export const Repo = styled.li`
  width: 100%;
  gap:0.5rem;
  padding: 0.5rem;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: solid black 1px;
  overflow-wrap: break-word;
  overflow: hidden;
  @media screen and (max-width: 900px) {
  }
  &:nth-child(odd) {
  background: lightsteelblue;
  }
  &:last-child {
    border: none;
  }
`
export const RepoLink = styled.a`
  font-weight: normal;
`
export const RepoProp = styled.p`
  width: 100%;
  font-weight: bold;
  overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
   overflow-wrap: break-word;
`
export const RepoDescript = styled.span`
  font-weight: normal;
`