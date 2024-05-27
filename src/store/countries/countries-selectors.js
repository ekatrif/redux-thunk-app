export const  selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectFilteredCountries = (state, { search='' }) => state.countries.list.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));