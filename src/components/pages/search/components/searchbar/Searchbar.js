import React from 'react';

import { Input } from '@core/input'; 
import { SearchOptionsSelect } from './components/search-options-select';

const Searchbar = () => (
  <div>
    <div>
      <Input />
    </div>
    <div>
      <SearchOptionsSelect />
    </div>
  </div>
);

export default Searchbar;