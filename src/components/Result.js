import { DataContext } from '@/context/dataContext'
import { useContext } from 'react'
import { 
  StyledMainSectionContainer, 
  StyledPTitle, 
  StyledH1Title, 
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
  } = useContext(DataContext)

  return (
    <StyledMainSectionContainer>
        <StyledH1Title>Summary:</StyledH1Title>
        <StyledPTitle>Project Name:</StyledPTitle>
        <StypelResultText>{projectName}</StypelResultText>

        <StyledPTitle>Project URL: </StyledPTitle>
        <StypelResultText>{projectUrl}</StypelResultText>

        <StyledPTitle>Project Category: </StyledPTitle>
        <StypelResultText>{projectCategory}</StypelResultText>

        <StyledPTitle>main goal with AlphaQuest: </StyledPTitle>
        <StypelResultText>{projectGoal}</StypelResultText>

        <StyledPTitle>Workers on the project</StyledPTitle>
        <StypelResultText>{amountOfPeople}</StypelResultText>

        <StyledPTitle>pre or post product launch: </StyledPTitle>
        <StypelResultText>{projectLaunch}</StypelResultText>

        <StyledPTitle>Email addrss: </StyledPTitle>
        <StypelResultText>{email}</StypelResultText>
    </StyledMainSectionContainer>
  )
}
