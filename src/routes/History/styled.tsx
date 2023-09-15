import styled from '@emotion/styled'



export const PageBox = styled.div`
  gap:1rem;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    align-items: flex-start;
  }
`

export const HistoryBox = styled.div`
  gap:1rem;
  display:flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 900px) {
    align-items: flex-start;
    width: auto;
  }
`
