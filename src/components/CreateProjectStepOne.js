import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/router';
import { DataContext } from '@/context/dataContext';


import { 
  StyledMainSectionContainer, 
  StyledParagraphTitle, 
  StyledTitle, 
  StyledParagraph, 
  StyledInputText, 
  StyledRadioButtonsListMain, 
  StyledRadioButtonsLabelSectionMain, 
  StyledRadioButtonsSecionInputSectionMain,
  StyledButtonCreate,
  StyledErrorMessage,

} from '@/style-components/MainSection';
import ErrorMessage from './ErrorMessage';




export default function CreateProjectStepOne() {
 
  const [valid, setValid] = useState(true);

  useEffect(()=>{
    setProgress(1);
  },[])

  const router = useRouter()

  const categories = ['NFT', 'GameFi', 'DeFi', 'DAO', 'SocialFi', 'Metaverse', 'Tools', 'Ecosystem', 'Others'];

  const {
    projectName, 
    setProjectName,
    projectUrl, 
    setProjectUrl,
    projectCategory,  
    setProjectCategory,
    setProgress,
    } = useContext(DataContext)

    function checkValidate(){
      if (projectName && projectUrl && projectCategory){
        setValid(true)
        router.push('/step2')
      } else {
        setValid(false)
      }
    }
    
   

  return (
    <StyledMainSectionContainer>
      <StyledParagraphTitle>To Create Quest you need firstly create Project</StyledParagraphTitle>
      <StyledTitle>Add New Project</StyledTitle>
      <label>
        <StyledParagraph>Project Name (It can be changed later)</StyledParagraph>
        <StyledInputText
          required
          type='text'
          name={`projectName`}
          value={projectName}
          onChange={(e)=>{setProjectName(e.target.value)}}
        />
      </label>
      <label>
        <StyledParagraph>Project URL (It cannot be changed after creation)</StyledParagraph>
        <StyledInputText
          required
          type='text'
          name={`projectUrl`}
          value={projectUrl}
          onChange={(e)=>setProjectUrl(e.target.value)}
        />
      </label>
      <div>
        <StyledParagraph>Project Category (It cannot be changed after creation)</StyledParagraph>
          <StyledRadioButtonsListMain> 
            {
              categories.map((item, i)=>{
                const checked = projectCategory === item;
                return (
                  <StyledRadioButtonsLabelSectionMain key={`key-${i}`} htmlFor={i}>
                  <StyledRadioButtonsSecionInputSectionMain
                      id={i}
                      required
                      type="radio" 
                      name={`options-${item}`}
                      checked={checked}
                      value={item}
                      onChange={() => {
                          setProjectCategory(item)
                      }}
                  />
                  <span>{item}</span>
                
                </StyledRadioButtonsLabelSectionMain>
                )
              })
            }
          </StyledRadioButtonsListMain>
      </div>
      
       <StyledButtonCreate onClick={() => checkValidate()}
        >Add Project
        </StyledButtonCreate>
        {
          !valid && <ErrorMessage/>
        }
    </StyledMainSectionContainer>
  )
}
