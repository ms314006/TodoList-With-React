export const CHANGE_PAGE_TYPE = 'CHANGE_PAGE_TYPE';

export const changePageType = type => ({
  type: CHANGE_PAGE_TYPE,
  payload: {
    pageType: type,
  },
});
