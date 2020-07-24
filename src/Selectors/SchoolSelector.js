import { createSelector} from 'reselect';

export const selectRaw = (School) => School;

const selectSchool = createSelector(
    [selectRaw],
    (School) => (School ? School.schools : null)
)
/*   headFirstName,
         headLastName,
         headEmail,
         headPhone,
         schoolName,
         schoolEmail,
         schoolPhone,
         schoolAddress,
         villageId,*/

const SelectheadFirstName = createSelector([selectSchool], (school) => (school ? school.headFirstName: ''));

const selectLoading = createSelector(
    [selectRaw],
    (School) => (School ? !!School.loading : false),
  );

const selectErrorMessage = createSelector([selectRaw], ({ error }) => error);

export default {
    selectRaw,
    selectLoading,
    selectErrorMessage,
    SelectheadFirstName,
}