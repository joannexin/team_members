import { browserHistory } from 'react-router';

export function editMember(member) {
  browserHistory.push('/edit');
  return {
    type: 'EDIT_MEMBER',
    payload: member
  }
}

export function updateMember(member) {
  browserHistory.push('/');
  return {
    type: 'UPDATE_MEMBER',
    payload: member
  }
}

export function addMember(attributes) {
  browserHistory.push('/');
  return {
    type: 'ADD_MEMBER',
    payload: attributes
  }
}

export function deleteMember(member) {
  browserHistory.push('/');
  return {
    type: 'DELETE_MEMBER',
    payload: member
  }
}

export function updateRole(role) {
  return {
    type: 'UPDATE_ROLE',
    payload: role
  }
}
