import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { People } from './components/people';
import {SelfEvaluation} from './components/selfEvaluation';

const WorkLog = () => (
  <div className="container">
<Tabs>
    <TabList>
      <Tab>Ворклог</Tab>
      <Tab>Трудности</Tab>
      <Tab>Самопроверка</Tab>
    </TabList>

    <TabPanel>
      <People />
    </TabPanel>
    <TabPanel>
      Any content 2
    </TabPanel>
    <TabPanel>
      <SelfEvaluation/>
    </TabPanel>
  </Tabs>
  </div>
);

export default WorkLog;

