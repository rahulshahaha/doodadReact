const initState = {
    articles: [
        {key: 1, title: "ggg", content: "sfsdfdsf"},
        {key: 2, title: "gdffgg", content: "rgkrdpo"},
        {key: 3, title: "gfsgg", content: "s;flksd;fl"}
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