import { useState } from "react";
import "./Music.css";

const Music = () => {
    const wifiIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
    <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
    <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
 </svg>;
    const netIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cell-signal-5" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M20 20h-15.269a0.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a0.731 .731 0 0 1 1.249 .517v15.269z"></path>
    <path d="M16 7v13"></path>
    <path d="M12 20v-9"></path>
    <path d="M8 20v-5"></path>
 </svg>;
    const batteryIcon = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-battery-4" width="18" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6 7h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2"></path>
    <line x1="7" y1="10" x2="7" y2="14"></line>
    <line x1="10" y1="10" x2="10" y2="14"></line>
    <line x1="13" y1="10" x2="13" y2="14"></line>
    <line x1="16" y1="10" x2="16" y2="14"></line>
 </svg>;
   const aar = {
      name: 'Lerod',
      word: ['c','a','b'],
      printSkill: function() {
         this.word.forEach(element => {
            console.log(this.name + 'know ' + element);
         });
      }

   }
aar.printSkill();

    return (
         <div className="calculator-app">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} className="header">
             <div className="header-left">
             <div className="time-header"> 13:44  </div>
             </div>
             <div className="micropfone"></div>
             <div style={{display:'flex',alignItems:'center'}} className="header-right">
             <div className="time-wifi">{netIcon}</div>
            <div className="time-wifi">{wifiIcon}</div>
            <div className="time-wifi">{batteryIcon}</div>
             </div>
            

            </div>
             <div className="result-container">

             </div>
             <div  style={{color:'white'}} className="button-calc">
                    
             </div>











         </div>
    );
}

export default Music;