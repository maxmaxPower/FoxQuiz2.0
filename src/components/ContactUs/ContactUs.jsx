import styles from "../ContactUs/ContactUs.module.css"
const ContactUs = (props) => {
    return (
      <div className={styles.fullScreenContainer}>
        <div className={styles.contactUs}>
          <button onClick={()=>{props.setCall(!props.call)}} className={styles.right}></button>
          <h1>Have a question?</h1>
          <h1>Contact us!</h1>
          <Form/>
        </div>
      </div>
    );
  };

const Form = () => {
    return <div className={styles.inputsFormsContainer}>
        <input className={styles.borderBottom} placeholder={'Your name'} type="text" />
        <input className={styles.borderBottom} placeholder={'Your email'} type="text" />
        <input className={styles.borderBottom} placeholder={'Your messege for us'} type="text" />
        <button style={{}}>SEND MESSEGE</button>
    </div>

}




export default ContactUs;