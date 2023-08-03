import { Message } from "element-ui";
let tipsType = ""
let tipsVal = ""
const tipsEvent = function(options) {
  if(tipsType === options.type && options.message === tipsVal) {
    const dom = document.querySelectorAll(".el-message")[0];
    if (dom === undefined) {
      Message(options);
    }
  } else {
    Message.closeAll()
    Message(options);
  }
  tipsType = options.type;
  tipsVal = options.message;
};
const arr = ["success", "warning", "info", "error"];
arr.forEach(type => {
  tipsEvent[type] = options => {
    const dom = document.querySelectorAll(".el-message")[0];
    if (dom === undefined) {
      Message[type](options);
    }
  };
});
export const tips = tipsEvent;
