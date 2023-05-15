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

  useEffect(()=>{
    setProgress(4);
  },[])

  return (
    <StyledMainSectionContainer>
        <StyledTitle>Summary:</StyledTitle>
        <StyledParagraphTitle>Project Name:</StyledParagraphTitle>
        <StypelResultText>{projectName}</StypelResultText>

        <StyledParagraphTitle>Project URL: </StyledParagraphTitle>
        <StypelResultText>{projectUrl}</StypelResultText>

        <StyledParagraphTitle>Project Category: </StyledParagraphTitle>
        <StypelResultText>{projectCategory}</StypelResultText>

        <StyledParagraphTitle>main goal with AlphaQuest: </StyledParagraphTitle>
        <StypelResultText>{projectGoal}</StypelResultText>

        <StyledParagraphTitle>Workers on the project</StyledParagraphTitle>
        <StypelResultText>{amountOfPeople}</StypelResultText>

        <StyledParagraphTitle>pre or post product launch: </StyledParagraphTitle>
        <StypelResultText>{projectLaunch}</StypelResultText>

        <StyledParagraphTitle>Email addrss: </StyledParagraphTitle>
        <StypelResultText>{email}</StypelResultText>
    </StyledMainSectionContainer>
  )
}
