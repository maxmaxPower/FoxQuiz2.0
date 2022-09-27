import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={s.messegeItem}>
      <div className={s.profileAvatar}><img src={props.img}></img></div>
      <div className={s.dialogItem__text}>{props.message}</div>
    </div>
  );
};

export default Message;
