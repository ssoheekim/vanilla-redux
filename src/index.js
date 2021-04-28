import {createStore} from "redux";
//리덕스에서 createStore를 가져온다. 
// store란? - state를 넣는 곳 즉 내 app에서 바뀌는 데이터가 들어갈 곳이다.
// createStore? - 내 data를 넣을 곳을 만들어준다
const add= document.getElementById("add");
const minus= document.getElementById("minus");
const number= document.querySelector("span");

number.innerText=0;

// reducer는 내 데이터를 수정하는 함수다
const countModifier = (count=0,action) =>{
    switch(action.type){
        case "ADD":
            return count+1;
        case "MINUS":
            return count-1;
        default: 
            return count;
    }   

};

const countStore=createStore(countModifier);

const onChange=()=>{
   number.innerText=countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd=()=>{
    countStore.dispatch({ type:"ADD" });
}

const handleMinus=()=>{
    countStore.dispatch({ type:"MINUS" });
}

add.addEventListener("click",handleAdd);
minus.addEventListener("click",handleMinus);


//dispatch로 countModifier에 type이라는 메시지를 보낸다.
//countStore.dispatch({type:"ADD"});
