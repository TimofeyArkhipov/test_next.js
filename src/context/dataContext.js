import { createContext, useState, useEffect } from "react"

const DataContext = createContext()

export default function DataProvider({children}) {

    const [progress, setProgress] = useState(1);
    const [projectName, setProjectName] = useState('')
    const [projectUrl, setProjectUrl] = useState('Alphaguilty.io/')
    const [projectCategory, setProjectCategory] = useState(null);
    const [projectGoal, setProjectGoal] = useState(null);
    const [amountOfPeople, setAmountOfPeople] = useState(0)
    const [projectLaunch, setProjectLaunch] = useState(null);
    const [email, setEmail] = useState('')
   
  
    const data = {
      'name': projectName,
      'url': projectUrl,
      'category': projectCategory,
      'goal': projectGoal,
      'workers': amountOfPeople,
      'project_Launch': projectLaunch
    }

    return (
        <DataContext.Provider value={{
            progress, 
            setProgress,
            projectName, 
            setProjectName,
            projectUrl, 
            setProjectUrl,
            projectCategory, 
            setProjectCategory,
            projectGoal, 
            setProjectGoal,
            amountOfPeople, 
            setAmountOfPeople,
            projectLaunch, 
            setProjectLaunch,
            email, 
            setEmail
        }}>
            {children}
        </DataContext.Provider>
      )
}

const DataConsumer = DataContext.Consumer

export {DataConsumer, DataContext}