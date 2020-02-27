import React from 'react';
import './SelfEvaluation.scss'
import tasks from '@resources/evaluation/evaluation.json'
import { withTranslation } from 'react-i18next';
import TaskListItem from './taskLislItem/TaskListItem';

const SelfEvaluation = ({ t }) => {
  return (
    <div>
      <h3>{t('evaluation:min')}</h3>
      <ul>
        {tasks["min"].map((v, i) => (<TaskListItem key={i} mark={v.mark} isDone={v.isDone} text={t(`evaluation:${v.description}`)} />))}
      </ul>
      <h3>{t('evaluation:normal')}</h3>
      <ul>
        {tasks["normal"].map((v, i) => (<TaskListItem key={i} mark={v.mark} isDone={v.isDone} text={t(`evaluation:${v.description}`)} />))}
      </ul>
      <h3>{t('evaluation:extra')}</h3>
      <ul>
        {tasks["extra"].map((v, i) => (<TaskListItem key={i} mark={v.mark} isDone={v.isDone} text={t(`evaluation:${v.description}`)} />))}
      </ul>
    </div>
  )
};

export default withTranslation()(SelfEvaluation);