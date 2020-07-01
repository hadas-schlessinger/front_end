import React from 'react'
import  MethodExplanationPanel  from './MethodExplanationPanel'
import WelcomePanel from './WelcomePanel'
import ContactPanel from './ContactPanel'
import ExamplePanel from './ExamplePanel'
import { Tab } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Welcome', render: () => <Tab.Pane>{< WelcomePanel />}</Tab.Pane> },
  { menuItem: 'The Method', render: () => <Tab.Pane>{< MethodExplanationPanel />}</Tab.Pane> },
  { menuItem: 'Run Examples', render: () => <Tab.Pane>{< ExamplePanel />}</Tab.Pane> },
  { menuItem: 'Contact Details', render: () => <Tab.Pane>{<ContactPanel / >}</Tab.Pane> },
]

const Home = () => (
  <Tab style={{fontSize: 20}} menu={{ fluid: true, vertical: true, tabular: true }} grid={{paneWidth: 14, tabWidth: 2}} panes={panes} />
)

export default Home


   


