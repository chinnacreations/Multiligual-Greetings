import {Component} from 'react'

import Tabs from './components/Tabs'
import LanguageItem from './components/LanguageItem'
import {MainContainer, Heading, TabsContainer} from './styledComponents'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = languageGreetingsList.filter(
      eachDetails => eachDetails.id === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()

    return (
      <MainContainer>
        <Heading>Multilingual Greetings</Heading>
        <TabsContainer>
          {languageGreetingsList.map(eachItem => (
            <Tabs
              key={eachItem.id}
              tabDetails={eachItem}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === eachItem.id}
            />
          ))}
        </TabsContainer>
        {filteredProjects.map(eachItem => (
          <LanguageItem key={eachItem.id} languageDetails={eachItem} />
        ))}
      </MainContainer>
    )
  }
}

export default App
