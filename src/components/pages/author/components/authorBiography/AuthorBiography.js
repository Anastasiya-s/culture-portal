import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const AuthorBiography = (props) => {
  const biographyArray = props.biography;
  return (
    <Timeline lineColor={'#ddd'}>
      {biographyArray.map((v, i) => {
        return (
          <TimelineItem
            key = {i}
            dateText = {v.year}
            style={{ color: '#34d1b2' }}
          >    
          <p>{v.description}</p>
          </TimelineItem>
        )
      })}      
</Timeline>
  )
};

export default AuthorBiography;