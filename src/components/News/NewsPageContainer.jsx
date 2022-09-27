import { connect } from "react-redux";
import { compose } from "redux";
import NewsPage from "./NewsPage";


let mapStateToProps = (state) => {
return {
    news: state.newsPage.news
};
};

let mapDispatchToProps = () => {
    return {

    };
};


export default compose(connect(mapStateToProps,mapDispatchToProps))(NewsPage);