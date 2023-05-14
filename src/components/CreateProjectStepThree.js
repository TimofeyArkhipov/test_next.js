import {useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { DataContext } from '@/context/dataContext';
import { 
  StyledMainSectionContainer, 
  StyledPTitle, 
  StyledH1Title, 
  StyledInputText, 
  StyledInputNumber,
  StyledRadioButtonsList2,
  StyledRadioButtonsLabelSection2,
  StyledRadioButtonsSecionInputSection2,
  StyledButtonContainer,
  StyledBackButton,
  StyledButtonContinue,
  StyledCustomSpan, 
  StyledControlButtons,
} from '@/style-components/MainSection';


export default function CreateProjectStepTwo() {
  const router = useRouter()
  const productLaunch = ['Pre Product', 'Post Product'];
    const {
        amountOfPeople, 
        setAmountOfPeople,
        projectLaunch, 
        setProjectLaunch,
        email, 
        setEmail,
        setProgress,
     } = useContext(DataContext);

     useEffect(()=>{
      setProgress(1);
    },[])


  return (
    <StyledMainSectionContainer>
      <StyledPTitle>Create Project</StyledPTitle>     
      <StyledH1Title>How many full-time workers on the project?</StyledH1Title>
      <div>
        <StyledControlButtons onClick={()=> setAmountOfPeople(amountOfPeople > 0 ? amountOfPeople-1 : 0 )}>-</StyledControlButtons>
          <StyledInputNumber onChange={(e)=>setAmountOfPeople(amountOfPeople < 0 ? parseInt(e.target.value) : 1)} type='number' value={amountOfPeople}/>
        <StyledControlButtons onClick={()=> setAmountOfPeople(amountOfPeople+1 )}>+</StyledControlButtons>
      </div>

      <div>
        <StyledH1Title>Are you pre or post product launch?</StyledH1Title>
          <StyledRadioButtonsList2> 
            {
              productLaunch.map((item, i)=>{
                const checked = projectLaunch === item;
                return (
                  <StyledRadioButtonsLabelSection2 key={`kes-${i}`} htmlFor={i}>
                    <StyledRadioButtonsSecionInputSection2
                        id={i}
                        type="radio" 
                        name={`options-${item}`}
                        checked={checked}
                        value={item}
                        onChange={() => {
                          setProjectLaunch(item)
                        }}
                    />
                    <StyledCustomSpan/>
                    {item}
                </StyledRadioButtonsLabelSection2>
                )
              })
            }
          </StyledRadioButtonsList2>
      </div>
      <StyledH1Title>Contact email</StyledH1Title>
      <StyledInputText 
        onChange={(e)=>setEmail(e.target.value)} 
        type='email'
        value={email}
        />
      <StyledButtonContainer>
        <StyledBackButton onClick={() => router.push('/step2')}>Back</StyledBackButton>
        <StyledButtonContinue 
          disabled={amountOfPeople && projectLaunch && email ? false : true} 
          onClick={() => router.push('/result')}
          >Create project
        </StyledButtonContinue>
      </StyledButtonContainer>

    </StyledMainSectionContainer>
  )
}
