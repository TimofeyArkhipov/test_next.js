import { DataContext } from '@/context/dataContext'
import { useContext, useEffect } from 'react'
import { 
  StyledMainSectionContainer, 
  StyledParagraphTitle, 
  StyledTitle, 
  StypelResultText,
} from '@/style-components/MainSection';

export default function Result() {
  const {
    projectName, 
    projectUrl, 
    projectCategory, 
    projectGoal, 
    amountOfPeople, 
    projectLaunch, 
    email, 
    setProgress,
  } = useContext(DataContext)

const resultArray = [
  { title: 'Project Name:', text: projectName,},
  { title: 'Project URL:', text: projectUrl}, 
  { title: 'Project Category:',text:  projectCategory},
  { title:'main goal with AlphaQuest:',text:projectGoal}, 
  { title: 'Workers on the project',text: amountOfPeople}, 
  { title: 'pre or post product launch:',text: projectLaunch}, 
  { title: 'Email addrss:',text: email}
];

  useEffect(()=>{
    setProgress(4);
  },[])

  return (
    <StyledMainSectionContainer>
        <StyledTitle>Summary:</StyledTitle>
        {
          resultArray.map(({title, text}, i)=>(
            <div key={i}>
              <StyledParagraphTitle>{title}</StyledParagraphTitle>
              <StypelResultText>{text}</StypelResultText>
            </div>
          ))
        }
    </StyledMainSectionContainer>
  )
}
