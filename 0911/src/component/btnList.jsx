import React from "react";
import Button from "./button";

function BtnList(props) {
    const menus = ["좋아요! 😃", "정말 좋아요! 🤭", "최고에요! 😄", "미쳤어요!! 🤪"];


  return (
    <div>
      {menus.map((menu, index) => (
        <Button key={index} state={menu} onClick={() => props.onButtonClick(menu)} />
      ))}
    </div>
  );
}
export default BtnList;


