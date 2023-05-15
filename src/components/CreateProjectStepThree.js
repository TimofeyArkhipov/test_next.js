import {useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { DataContext } from '@/context/dataContext';
import ErrorMessage from './ErrorMessage';
import { 
  StyledMainSectionContainer, 
  StyledParagraphTitle, 
  StyledTitle, 
  StyledInputText, 
  StyledInputNumber,
  StyledRadioButtonsListSecondary,
  StyledRadioButtonsLabelSectionSecondary,
  StyledRadioButtonsSecionInputSectionSecondary,
  StyledButtonContainer,
  StyledBackButton,
  StyledButtonContinue,
  StyledCustomSpan, 
  StyledControlButtons,
} from '@/style-components/MainSection';


export default function CreateProjectStepTwo() {
  const router = useRouter()
  const [valid, setValid] = useState(true);
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
      setProgress(3);
    },[])

    function checkValidate(){
      if (amountOfPeople && projectLaunch && email){
        setValid(true)
        router.push('/result')
      } else {
        setValid(false)
      }
    }

  return (
    <StyledMainSectionContainer>
      <StyledParagraphTitle>Create Project</StyledParagraphTitle>     
      <StyledTitle>How many full-time workers on the project?</StyledTitle>
      <div>
        <StyledControlButtons onClick={()=> setAmountOfPeople(amountOfPeople > 0 ? amountOfPeople-1 : 0 )}>-</StyledControlButtons>
          <StyledInputNumber onChange={(e)=>setAmountOfPeople(amountOfPeople < 0 ? parseInt(e.target.value) : 1)} type='number' value={amountOfPeople}/>
        <StyledControlButtons onClick={()=> setAmountOfPeople(amountOfPeople+1 )}>+</StyledControlButtons>
      </div>

      <div>
        <StyledTitle>Are you pre or post product launch?</StyledTitle>
          <StyledRadioButtonsListSecondary> 
            {
              productLaunch.map((item, i)=>{
                const checked = projectLaunch === item;
                return (
                  <StyledRadioButtonsLabelSectionSecondary key={`kes-${i}`} htmlFor={i}>
                    <StyledRadioButtonsSecionInputSectionSecondary
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
                </StyledRadioButtonsLabelSectionSecondary>
                )
              })
            }
          </StyledRadioButtonsListSecondary>
      </div>
      <StyledTitle>Contact email</StyledTitle>
      <StyledInputText 
        onChange={(e)=>setEmail(e.target.value)} 
        type='email'
        value={email}
        />
      <StyledButtonContainer>
        <StyledBackButton onClick={() => router.push('/step2')}>Back</StyledBackButton>
        <StyledButtonContinue 
  
          onClick={() => checkValidate()}
          >Create project
        </StyledButtonContinue>
      </StyledButtonContainer>
      {
          !valid && <ErrorMessage/>
        }
    </StyledMainSectionContainer>
  )
}
