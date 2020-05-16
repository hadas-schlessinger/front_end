import React from 'react'
import  MethodExplanationPanel  from './MethodExplanationPanel'
import WelcomePanel from './WelcomePanel'
import ContactPanel from './ContactPanel'
import ExamplePanel from './ExamplePanel'
import { Tab } from 'semantic-ui-react'


const panes = [
  { menuItem: 'Welcome', render: () => <Tab.Pane>{< WelcomePanel />}</Tab.Pane> },
  { menuItem: 'Method Explanation', render: () => <Tab.Pane>{< MethodExplanationPanel />}</Tab.Pane> },
  { menuItem: 'Example', render: () => <Tab.Pane>{< ExamplePanel />}</Tab.Pane> },
  { menuItem: 'Contact', render: () => <Tab.Pane>{<ContactPanel / >}</Tab.Pane> },
]

const Home = () => (
  <Tab style={{fontSize: 20}} menu={{ fluid: true, vertical: true, tabular: true }} grid={{paneWidth: 14, tabWidth: 2}} panes={panes} />
)

export default Home


   


