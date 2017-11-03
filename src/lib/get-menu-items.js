import _ from 'lodash';
import STAGES from './stage-types';

const content = {

};

const actionsAndFilters = {
  include: ['artist', 'album', 'song'],
  exclude: ['artist', 'album', 'song'],
  unique: ['artist', 'album', 'song']
};

const endingEvents = {

};

const allPossibleMenuItems = {
  [STAGES.CONTENT_SELECTION]: content,
  [STAGES.ACTIONS_AND_FILTER_SELECTION]: actionsAndFilters,
  [STAGES.END_SELECTION]: endingEvents
};

export default (currentSelections, stage) => {
  if (currentSelections.length === 0) {
    return _.get(allPossibleMenuItems, `${stage}.items`);
  } else if (currentSelections.length === 1) {
    return _.get(allPossibleMenuItems, `${stage}.${currentSelections[0]}`);
  } else if (currentSelections.length === 1) {
    return _.get(allPossibleMenuItems, `${stage}.${currentSelections[0]}.${currentSelections[1]}`);
  }
};
