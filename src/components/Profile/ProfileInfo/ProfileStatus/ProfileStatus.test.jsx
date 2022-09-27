import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


describe("ProfileStatus component",()=>{
    test("status from props shoud be in the state",() => {
        const component = create(<ProfileStatusWithHooks status='MRMRMRMR'/>);
        const instance = component.getInstance();//дай мені екземпляр обєкта профайлстатус
        expect(instance.status).toBe("MRMRMRMR");
    })
})