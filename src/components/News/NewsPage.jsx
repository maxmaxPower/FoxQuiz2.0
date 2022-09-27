import s from "./News.module.css";
const NewsPage = (props) => {
  return (
    <div>
      <div className={s.newsContainer}>
        {props.news.map((u) => (
          <div className={s.news_item}>
            <div className={s.photo}>
              {" "}
              <img src={u.photoUrl} alt="" />
            </div>
            <div className={s.data_avtor__container}>
              <div>{u.avtor}</div>
              <div className={s.avtorAvatar}>
                <img src={u.avtorAvatar} alt="" />
              </div>
              <div>{u.data}</div>
            </div>
            <div className={s.textContainer}>{u.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
