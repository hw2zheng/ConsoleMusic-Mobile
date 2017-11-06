import _ from 'lodash';
import STAGES from './stage-types';

const content = [
  {
    text: 'playlist 1',
    value: 12345
  },
  {
    text: 'playlist 2',
    value: 12346
  },
  {
    text: 'chill mix',
    value: 123
  }
];

const actionsAndFilters = [
  {
    text: 'Exclude',
    value: 'exclude',
    prompt: 'songs with',
    next: [
      {
        text: 'Artist',
        value: 'artist',
        next: 'TEXT_INPUT'
      },
      {
        text: 'Title',
        value: 'title',
        next: 'TEXT_INPUT'
      },
      {
        text: 'Genre',
        value: 'genre',
        next: 'TEXT_INPUT'
      },
      {
        text: 'Album',
        value: 'album',
        next: 'TEXT_INPUT'
      }
    ]
  },
  {
    text: 'Include',
    value: 'include'
  },
  {
    text: 'Unique',
    value: 'unique'
  }
];

export default (stage, selectedItems) => {
  switch (stage) {
    case STAGES.CONTENT_SELECTION:
      return content;
    case STAGES.ACTIONS_AND_FILTER_SELECTION:
      if (selectedItems.length > 0) {
        return _.get(selectedItems[selectedItems.length - 1], 'next');
      }
      return actionsAndFilters;
  }
};
