import { createSelector } from 'reselect';

const dirSelector = state => state.directory;

export const directorySelector = createSelector(
    [dirSelector],
    directory => directory.sections
)