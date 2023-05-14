import styled from 'styled-components'

const MainColor = '#101313'
const TitleTextColor = '#2B8CE5';
const RegularTextColor = '#fff'
const ButtonColor = '#2B8CE5';
const Black = '#000';

export const Wrapper = styled.div`
 font-family: 'Space Grotesk';
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  @media (max-width:500px) {
   flex-direction : column;
  }
`
export const StyledMain = styled.main`
  /* display: flex;
  flex-direction: column; */
`

export const StyledMainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  margin: 3.7rem  6.4rem;
  max-width: 680px;
  @media (max-width:500px){
    margin: 1rem 0.8rem;
  }
`

export const StyledPTitle = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  color: ${TitleTextColor};
  @media (max-width:500px){
    line-height: 20px;
    font-size: 13px;
  }
`

export const StyledH1Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`

export const StyledP = styled.p`
 font-size: 1rem;
 font-weight: 300;
 margin-top: 1.7rem;
 line-height: 22px;
 @media (max-width:500px){
    margin-top: 1.5rem;
 }

`

export const StyledInputText = styled.input.attrs(
  {type: 'text'}, {type: 'email'}
  )`
  margin-top: 2px;
  width: 100%;
  background: ${MainColor};
  padding: 0.7rem 1rem;
  font-size: 16px;
  color: ${RegularTextColor};
  border-radius: 10px;
  border: 1px solid;
  border-color: rgba(225,225,225, 0.2);
  @media (max-width: 500px){
    width: 100%;
  }
`;

export const StyledRadioButtonsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledRadioButtonsLabelSection1 = styled.label`
  span{
    display: block;
    color: ${RegularTextColor};
    font-size: 1rem;
    font-weight: 400;
    margin-right: 1rem;
    border-radius: 10px;
    padding: 6px 12px;
    cursor: pointer;
    background: rgba(225,225,225, 0.2);
    transition: .3s;
  }
 
`
export const StyledRadioButtonsSecionInputSection1 = styled.input.attrs({type:'radio'})`
  visibility: hidden;
  margin-left: -10px;
  &:checked ~ span{
    background: rgba(41,140,229, 0.5);
    padding: 6px 12px;
    border-radius: 10px;
    color: ${RegularTextColor };
  }

`

export const StyledButtonCreate = styled.button`

  margin-top: 1.7rem;
  font-size: 16px;
  font-weight: 400;
  color: ${Black};
  width: 20rem;
  padding: 0.8rem 7rem;
  background: ${ButtonColor};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    background: ${RegularTextColor};
    transition: 0.3s;
  }

`

export const StyledRadioButtonsList2 = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledRadioButtonsLabelSection2 = styled.label`

  color: ${RegularTextColor};
  font-size: 16px;
  font-weight: 400;

  margin-top: 1.5rem;
  cursor: pointer;
`

export const StyledCustomSpan = styled.span`
  left: -8px;
  top: 3px;
  cursor: pointer;
  width: 17px;
  height: 17px;
  border: 2px solid rgba(225,225,225, 0.2);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    width: 7px;
    height: 7px;
    background: ${ButtonColor};
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
  }
`

export const StyledRadioButtonsSecionInputSection2 = styled.input.attrs({type:'radio'})`
  visibility: hidden; 
  &:checked + span:after {
  opacity: 1;
}

`

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px){
    flex-shrink: 1;
  }
`

export const StyledBackButton = styled.button`
  margin-top: 1.7rem;
  font-size: 16px;
  font-weight: 400;
  color: ${RegularTextColor};
  width: 7.5rem;
  padding: 0.8rem 2rem;
  background: rgba(225,225,225, 0.2);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  /* margin-right: 2rem; */
  &:hover{
    background: ${RegularTextColor};
    color: ${MainColor};
    transition: 0.3s;
  }
  @media (max-width:500px){
    padding: 0.8rem 0.5rem;
    width: 9.8rem;
  }
`


export const StyledButtonContinue = styled.button`
  margin-top: 1.7rem;
  font-size: 16px;
  font-weight: 400;
  color: ${Black};
  width: 20rem;
  padding: 0.8rem 4rem;
  background: ${ButtonColor};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    background: ${RegularTextColor};
    transition: 0.3s;
  }
  @media (max-width:500px){
    padding: 0.8rem 0.5rem;
    width: 9.8rem;
  }

`


export const StyledControlButtons = styled.button`
  margin-top: 1.7rem;
  font-size: 16px;
  font-weight: 400;
  color: ${RegularTextColor};
  padding: 0.8rem;
  background: rgba(225,225,225, 0.2);
  border-radius: 10px;
  border: none;
  cursor: pointer;
`


export const StyledInputNumber = styled.input.attrs(
  {type: 'number'}
  )`
  margin: 2px 1rem;
  width: auto;
  background: ${MainColor};
  padding: 0.8rem 1.2rem;
  font-size: 16px;
  color: ${RegularTextColor};
  border-radius: 10px;
  border: 1px solid;
  border-color: rgba(225,225,225, 0.2);
  @media (max-width: 620px){
    width: 60%;
  }
`;


export const StypelResultText = styled.p`
  margin-bottom: 2rem;
`