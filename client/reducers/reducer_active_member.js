export default function(state=null, action) {
  switch (action.type) {
  case 'EDIT_MEMBER':
    return action.payload;
  }
  return state;
}
