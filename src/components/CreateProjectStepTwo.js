import {useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { DataContext } from '@/context/dataContext';
import ErrorMessage from './ErrorMessage';
import { 
  StyledMainSectionContainer, 
  StyledParagraphTitle, 
  StyledTitle, 
  StyledRadioButtonsListSecondary,
  StyledRadioButtonsLabelSectionSecondary,
  StyledRadioButtonsSecionInputSectionSecondary,
  StyledCustomSpan,
  StyledButtonContainer,
  StyledBackButton,
  StyledButtonContinue

} from '@/style-components/MainSection';


export default function CreateProjectStepTwo() {
    const router = useRouter()
    const goals = ['Grow My Community', 'Activate Existing Members', 'Understand My Members', ' Other'];
    const [valid, setValid] = useState(true);
    const { projectGoal, setProjectGoal, setProgress,} = useContext(DataContext);
    
    useEffect(()=>{
      setProgress(2);
    },[])

    function checkValidate(){
      if (projectGoal){
        setValid(true)
        router.push('/step3')
      } else {
        setValid(false)
      }
    }

  return (
    <StyledMainSectionContainer>
      <StyledParagraphTitle>Project Details</StyledParagraphTitle>      
      <div>
        <StyledTitle>What is your main goal with AlphaQuest?</StyledTitle>
          <StyledRadioButtonsListSecondary> 
            {
              goals.map((item, i)=>{
                const checked = projectGoal === item;
                return (
                  <StyledRadioButtonsLabelSectionSecondary key={`kes-${i}`} htmlFor={i}>
                    <StyledRadioButtonsSecionInputSectionSecondary 
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
                </StyledRadioButtonsLabelSectionSecondary>
                )
              })
            }
          </StyledRadioButtonsListSecondary>
      </div>
      <StyledButtonContainer>
        <StyledBackButton onClick={() => router.push('/step1')}>Back</StyledBackButton>
        <StyledButtonContinue  
          onClick={() => checkValidate()}
          >Continue
        </StyledButtonContinue >
      </StyledButtonContainer>
      {
          !valid && <ErrorMessage/>
        }
    </StyledMainSectionContainer>
  )
}
