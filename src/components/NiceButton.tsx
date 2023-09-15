import styled from '@emotion/styled'

export const NiceButton = styled.button`
  font-family: sans-serif;
  font-weight: 0;
  color: #fff;
  background-color: #0066CC;
  padding: 0.5rem 2rem;
  border: 2px solid #0066cc;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition : 500ms;
  justify-content: center;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    &:hover {
      background-color: #fff;
      color: #0066cc;
      border: solid 2px #0066cc;
    }
  }
  &:active {
    position:relative;
	  top:1px;
  }
`