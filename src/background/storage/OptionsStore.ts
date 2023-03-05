import { createStore } from 'chrome-extension-toolkit';

/**
 * A store that is used for storing user options
 */
interface IOptionsStore {
    /** whether we should automatically highlight conflicts on the course schedule page */
    shouldHighlightConflicts: boolean;
    /** whether we should automatically scroll to load more courses on the course schedule page (without having to click next) */
    shouldScrollToLoad: boolean;
}

export const OptionsStore = createStore<IOptionsStore>('OPTIONS_STORE', {
    shouldHighlightConflicts: true,
    shouldScrollToLoad: true,
});