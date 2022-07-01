export default function reducer(state, action){
    switch(action.type){
        case 'setRandArray':{
            return{
                ...state,
                randArray: action.data

            }
        }
        case 'setNum':{
            return{
                ...state,
                num: action.data

            }
        }
        case 'setDisplay':{
            return{
                ...state,
                display: action.data

            }
        }
        case 'setAnswerValue':{
            return{
                ...state,
                answerValue: action.data
            }
        }
        case 'setScore':{
            return{
                ...state,
                score: action.data
            }
        }
        case 'setLoginUser':{
            return{
                ...state,
                loginUser: action.data
            }
        }
        case 'setUsers':{
            return{
                ...state,
                users: action.data
            }
        }
        default: return state
    }

}