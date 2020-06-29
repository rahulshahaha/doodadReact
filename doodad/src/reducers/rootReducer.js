const initState = {
    articles: [
        {key: 1, title: "ggg", content: "sfsdfdsf"},
        {key: 2, title: "gdffgg", content: "rgkrdpo"},
        {key: 3, title: "gfsgg", content: "s;flksd;fl"}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === "UPDATE_ARTICLES"){
        const articles = action.newArticles;
        return{
            articles: [...articles]
        };
    }else{
        return state
    }
}


export default rootReducer