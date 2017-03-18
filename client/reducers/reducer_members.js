const members = [
  { id: 1, firstname: 'Joanne', lastname: 'Xin', email: 'jeffiefeifei@gmail.com', 'phone': '408-888-8888', 'checked': 'admin' },
  { id: 2, firstname: 'Darius', lastname: 'Karel', email: 'darius@gamil.com', 'phone': '408-888-0000', 'checked': 'regular' },
  { id: 3, firstname: 'Adam', lastname: 'Stepinski', email: 'adam@gmail.com', 'phone': '408-888-6666', 'checked': 'regular' },
  { id: 4, firstname: 'Mike', lastname: 'Li', email: 'mike@gmail.com', 'phone': '408-888-3333', 'checked': 'regular' }
]

const INITIAL_STATE = {
  members: members,
  currentMember: {},
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'EDIT_MEMBER':
    return Object.assign({}, state, { currentMember: action.payload })

    case 'UPDATE_MEMBER':
    var newMembers = updateMember(state.members, action.payload);
    return Object.assign({}, state, { members: newMembers })

    case 'DELETE_MEMBER':
    var newMembers = deleteMember(state.members, action.payload);
    return Object.assign({}, state, { members: newMembers })

    case 'ADD_MEMBER':
    let member = action.payload
    member.id = generateId(state.members);
    var newMembers = state.members.concat([member])
    return Object.assign({}, state, { members: newMembers })

    case 'UPDATE_ROLE':
    var newMember =  JSON.parse(JSON.stringify(state.currentMember));
    newMember.checked = action.payload;
    return Object.assign({}, state, { currentMember: newMember })

    default:
    return state;
  }
}

const generateId = (members) => {
  return Math.max.apply(null, members.map((m) => m.id)) + 1;
}

const updateMember = (members, member) => {
  for (var i = 0; i < members.length; i++) {
    if (member.id === members[i].id) {
      return members.slice(0, i).concat(member).concat(members.slice(i + 1));
    }
  }
}

const deleteMember = (members, member) => {
  for (var i = 0; i < members.length; i++) {
    if (member.id === members[i].id) {
      return members.slice(0, i).concat(members.slice(i + 1));
    }
  }
}
