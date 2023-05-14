import {useState, useContext, useEffect} from 'react'
import { useRouter } from 'next/router';
import { DataContext } from '@/context/dataContext';
import { 
  StyledMainSectionContainer, 
  StyledPTitle, 
  StyledH1Title, 
  StyledP, 
  StyledInputText, 
  StyledRadioButtonsList, 
  StyledRadioButtonsLabelSection1, 
  StyledRadioButtonsSecionInputSection1,
  StyledButtonCreate,

} from '@/style-components/MainSection';




export default function CreateProjectStepOne() {
 
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


  return (
    <StyledMainSectionContainer>
      <StyledPTitle>To Create Quest you need firstly create Project</StyledPTitle>
      <StyledH1Title>Add New Project</StyledH1Title>
      <label>
        <StyledP>Project Name (It can be changed later)</StyledP>
        <StyledInputText
          required
          type='text'
          name={`projectName`}
          value={projectName}
          onChange={(e)=>setProjectName(e.target.value)}
        />
      </label>
      <label>
        <StyledP>Project URL (It cannot be changed after creation)</StyledP>
        <StyledInputText
          required
          type='text'
          name={`projectUrl`}
          value={projectUrl}
          onChange={(e)=>setProjectUrl(e.target.value)}
        />
      </label>
      <div>
        <StyledP>Project Category (It cannot be changed after creation)</StyledP>
          <StyledRadioButtonsList> 
            {
              categories.map((item, i)=>{
                const checked = projectCategory === item;
                return (
                  <StyledRadioButtonsLabelSection1 key={`key-${i}`} htmlFor={i}>
                  <StyledRadioButtonsSecionInputSection1
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
                
                </StyledRadioButtonsLabelSection1>
                )
              })
            }
          </StyledRadioButtonsList>
      </div>
      
       <StyledButtonCreate
        disabled={projectName && projectUrl && projectCategory ? false : true} 
        onClick={() => router.push('/step2')}
        >Add Project
        </StyledButtonCreate>
    </StyledMainSectionContainer>
  )
}
