import {get} from 'lodash';
export const userSelectors = state => get(state, 'user.user', null);
