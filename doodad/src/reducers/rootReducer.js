const initState = {
    articles: [
        {key: 1, title: "Title", content: "Content"},
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === "UPDATE_ARTICLES"){
        var newArticles = action.newArticles;
        return{
            articles: newArticles
        };
    }else{
        return state
    }
}


export default rootReducer