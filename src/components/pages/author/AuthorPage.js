import React from 'react';
import { useParams } from 'react-router-dom';

import { AuthorFrame } from './components/authorFrame';
import { AuthorVideo } from './components/authorVideo';
import { AuthorBiography } from './components/authorBiography';
import { MapComponent } from './components/mapComponent';
import { MyImageGallery } from './components/myImageGallery';
import { AuthorWork } from './components/authorWork';
import { withTranslation } from 'react-i18next';
import { Parallax } from '@core/parallax';

const AuthorPage = ({ t }) => {
  const { id } = useParams();
  const author = t('authors:authors')[id];
  return (
    <div className='container'>
      <Parallax />
      <AuthorFrame
        birthplace={t('controls:birthplace')}
        src={author.selfie}
        name={author.name}
        yearOfLife={author.yearOfLife}
        spawnPoint={author.spawnPoint}
      />
      {author.video == 'null'
        ? ''
        : <AuthorVideo src={author.video}
        />}
      <AuthorBiography
        text={t('controls:biography')}
        biography={author.biography} />
      <AuthorWork
        text={t('controls:worksOfAuthor')}
        tableTitle={{ "year": t('controls:year'), "work": t('controls:work') }}
        works={author.listOfWorks} />
      <MyImageGallery
        text={t('controls:gallery')}
        images={author.photoGallery} />
      <MapComponent position={author.map} />
    </div>
  )
};

export default withTranslation()(AuthorPage);