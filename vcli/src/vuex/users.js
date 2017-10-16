let users = {
    state: {
        users: [
            {id: 1, name: 'weisen'},
        ]
    }
    ,
    getters: {
        getUsers(state)
        {
            return state.users;
        }
    }
};

export  default  users;