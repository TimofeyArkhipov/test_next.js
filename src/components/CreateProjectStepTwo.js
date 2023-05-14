import {useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { DataContext } from '@/context/dataContext';
import { 
  StyledMainSectionContainer, 
  StyledPTitle, 
  StyledH1Title, 
  StyledRadioButtonsList2,
  StyledRadioButtonsLabelSection2,
  StyledRadioButtonsSecionInputSection2,
  StyledCustomSpan,
  StyledButtonContainer,
  StyledBackButton,
  StyledButtonContinue

} from '@/style-components/MainSection';


export default function CreateProjectStepTwo() {
    const router = useRouter()
    const goals = ['Grow My Community', 'Activate Existing Members', 'Understand My Members', ' Other'];

    const { projectGoal, setProjectGoal, setProgress,} = useContext(DataContext);
    
    useEffect(()=>{
      setProgress(1);
    },[])

  return (
    <StyledMainSectionContainer>
      <StyledPTitle>Project Details</StyledPTitle>      
      <div>
        <StyledH1Title>What is your main goal with AlphaQuest?</StyledH1Title>
          <StyledRadioButtonsList2> 
            {
              goals.map((item, i)=>{
                const checked = projectGoal === item;
                return (
                  <StyledRadioButtonsLabelSection2 key={`kes-${i}`} htmlFor={i}>
                    <StyledRadioButtonsSecionInputSection2 
                        id={i}
                        type="radio" 
                        name={`options-${item}`}
                        checked={checked}
                        value={item}
                        onChange={() => {
                            setProjectGoal(item)
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
      <StyledButtonContainer>
        <StyledBackButton onClick={() => router.push('/step1')}>Back</StyledBackButton>
        <StyledButtonContinue  
          disabled={projectGoal ? false : true}  
          onClick={() => router.push('/step3')}
          >Continue
        </StyledButtonContinue >
      </StyledButtonContainer>
      
    </StyledMainSectionContainer>
  )
}
