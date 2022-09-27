export const requiredField = (value) => {
    if (value) return undefined;// якшо є велью то андефайнд
    return 'Field is required'; // якшо нема то поле обовязкове
};

// САНК КРЕЕЙТОР ВИКОРИСТОВУЄМ ДЛЯ ТОГО ШООБ ЙОГО ІСПОЛЬЗУВАТИ ДЕСЬ В КОДІ БАГАТО РАЗ І ПЕРЕДАВАТИ ТУДА РАЗНІ ЗНАЧЄНІЯ 

export const maxLengthThunkCreator = (maxLength) => (value) => {
    if (value.length >= maxLength ) return `Max length is ${maxLength} symbols`;  
    return undefined;
}

