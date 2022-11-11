import s from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={s.Settings}>
      {/* <div className={s.settings__table}>
        <p>Main settings</p>
      </div>
      <div className={s.settings__table}>
        <p>Network settings</p>
      </div>
      <div className={s.settings__table}>
        <p>Password Settings</p>
      </div> */}


        <div className={s.carousel_container}>
        <div className={s.carousel_items}>
      <img src="https://cdnb.artstation.com/p/assets/images/images/006/733/947/large/-youtube.jpg?1500880193" alt="" />
      <img src="https://cdnb.artstation.com/p/assets/images/images/006/733/949/large/-.jpg?1500880218" alt="" />
      <img src="https://shapka-youtube.ru/wp-content/uploads/2019/06/dj.jpg" alt="" />
      <img src="https://www.meme-arsenal.com/memes/5c37ca3451d9b04ccd8daaf7df3af6b3.jpg" alt="" />
      <img src="https://www.meme-arsenal.com/memes/e0281d7fb8f25383a6f61cd232fc1290.jpg" alt="" />
      <img src="https://www.meme-arsenal.com/memes/a98a0e6db6e29adc7e09f14c132f9160.jpg" alt="" />
        </div>
          <div className={s.carousel_buttons}>
          <h1 className=" text-red-400 ">Hello world</h1>
            
              <button className={s.leftbutton}>LEFT</button>
              <button className={s.rightbutton}>RIGHT</button>
          </div>
        </div>


    </div>
  );
};
export default Settings;

