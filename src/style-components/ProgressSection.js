import styled, { keyframes } from 'styled-components'


const TitleTextColor = '#2B8CE5';
const RegularTextColor = '#fff';

export const ProgressSection = styled.div`
    min-width: 200px;
    border-right: 2px solid #FAFAFA;
    padding-top: 2.6rem;
    padding-left: 1.6rem;
    display: flex;
    flex-direction: column;
    
   &::after{
    content: '';
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -10%;
    background: linear-gradient(280.87deg, #87F696 20.45%, #00FFFF 41.25%, #9C16EF 72.03%, #4200FF 94.43%);
    opacity: 0.5;
    filter: blur(32.5px);
   }
    
    @media (max-width:500px) {
        flex-direction: row;
        border:none;
        justify-content: center;
        width: 100%;
        &::after{
            content:none;
        }
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