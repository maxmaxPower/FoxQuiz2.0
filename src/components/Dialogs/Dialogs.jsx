import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Messege/Messege";
import { SendMessegeReduxForm } from "./SendMessegeForm";

const Dialogs = (props) => {
  let friendmessegesElements = props.friendmessages.map((me) => (
    <Message message={me.message} key={me.id} img={me.img} />
  ));
  let mymessegesElements = props.mymesseges.map((m) => (
    <Message message={m.message} img={m.img} key={m.id} />
  ));
  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar} />
  ));

  const addNewMessege = (values) => {
    props.sendMessege(values.newMessege);
  };

  return (
    <div className={s.dialogsPage}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messegesWraper}>
        <div className={s.messegesInner}>
          <div className={s.friendmesseges}>{friendmessegesElements}</div>
          <div className={s.mymesseges}>{mymessegesElements}</div>
        </div>
        <div className={s.messegeText}>
          <SendMessegeReduxForm
            onSubmit={addNewMessege}
            messegesPage={props.messegesPage}
          />
          <div className={s.sayPostAdded}></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
