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
  }
`

export const PersonalBox = styled.div`
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

export const ReposBox = styled.div`
  width: 100%;
  gap:2rem;
  padding: 1rem;
  display:flex;
  flex-wrap: wrap;
`