export function editMember(member) {
  return {
    type: 'EDIT_MEMBER',
    payload: member
  }
}

export function addMember(newMember) {
  return {
    type: 'ADD_MEMBER',
    payload: newMember
  }
}

export function deleteMember(member) {
  return {
    type: 'DELETE_MEMBER',
    payload: member
  }
}
