import styled, { keyframes } from 'styled-components'
import bg from '../../src/pics/bg.png'

const TitleTextColor = '#2B8CE5';
const BgButtonColor = '#2B8CE5';
const RegularTextColor = '#fff';

export const ProgressSection = styled.div`
    min-width: 200px;
    border-right: 2px solid #FAFAFA;
    padding-top: 2.6rem;
    padding-left: 1.6rem;
    display: flex;
    flex-direction: column;
    background-image: url(${bg});
    background-size: 100%;
    background-position: bottom;
    
    @media (max-width:500px) {
        flex-direction: row;
        border:none;
        justify-content: center;
        width: 100%;
      
    }
`

export const StepBlock = styled.div`
    display: flex;
    align-items: center;
    opacity: ${({step, active}) => step === 'completed' || active ? '1' : '0.5'};
    p{
        font-size: 14px;
        color: ${({ step }) => (step === 'completed' ? TitleTextColor : RegularTextColor)};
    }
    @media(max-width:500px){
        p{
           display: none
        }
    }
   
`

export const StepPoint = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ step }) => (step === 'completed' ? TitleTextColor : RegularTextColor)};
    margin-right: 0.5rem;
    @media (max-width:500px) {
        margin-right: 0;
    }

`

export const StepLine = styled.div`
    width: 1px;
    height: 25px;
    background:  ${({ step }) => (step === 'completed' ? TitleTextColor : RegularTextColor)};
    /* background: ${props => props.step>=2 }; */
    margin: 6px 0px 6px 4px;
    @media (max-width:500px) {
        height: 1px;
        width: 25px;
        margin: 3px 4px;
    }
`