
function talk(){
  console.log(this.sound) 
}
let mrweirdAccent = {
  sound: 'mOrdOring mAst be SOCH a dreadFUL ACT!'    
}

talk();

let talkBoundtomrweirdAccent = talk.bind(mrweirdAccent)

talkBoundtomrweirdAccent();
