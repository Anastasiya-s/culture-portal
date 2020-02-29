import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { withTranslation } from 'react-i18next';

import { People } from './components/people';
import { SelfEvaluation } from './components/selfEvaluation';
import { Difficulties } from './components/difficulties';
import { Parallax } from '@core/parallax';

const WorkLog = ({ t }) => (
  <div className="container" style={{ marginBottom: 100 }}>
    <Parallax />
    <Tabs>
      <TabList>
        <Tab>{t('controls:worklog')}</Tab>
        <Tab>{t('controls:difficulties')}</Tab>
        <Tab>{t('controls:selfEvaluation')}</Tab>
      </TabList>

      <TabPanel>
        <People />
      </TabPanel>
      <TabPanel>
        <Difficulties />
      </TabPanel>
      <TabPanel>
        <SelfEvaluation />
      </TabPanel>
    </Tabs>
  </div>
);

export default withTranslation()(WorkLog);

