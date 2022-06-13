
        const bytes = 48;
function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(){resolve({base64:reader.result,width:this.width,height:this.height})};
      // Typescript users: use following line
      // reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  }
  function getEncryptionHash (file){
      
    return new Promise(async (resolve, reject) => {
    if(!file){
        return alert("Вы не выбрали картинку.")
    }
    const {base64,width:imageWidth,height:imageHeight} = await convertFileToBase64(file);
    const int = bytes / 3
let arr = []
for(let i = 1;i <= int;i++){
  for(let j = 1;j <= int;j++){
    if(i * j === int){
      arr.push({width:i,height:j})
    }
  }
}
const initialSizes = {width:imageWidth,height:imageHeight}
let bestSizes;
arr.forEach(obj => {
  if(!bestSizes || (Math.abs(Math.abs(initialSizes.width - obj.width) - Math.abs(initialSizes.height - obj.height)) < Math.abs(Math.abs(initialSizes.width - bestSizes.width) - Math.abs(initialSizes.height - bestSizes.height)) && (Math.abs(initialSizes.width - obj.width) < Math.abs(initialSizes.width - bestSizes.width) || Math.abs(initialSizes.height - obj.height) < Math.abs(initialSizes.height - bestSizes.height)))){
    
    bestSizes = obj;
  }
})
    const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = bestSizes.width; // target width
canvas.height = bestSizes.height; // target height

const image = new Image();

image.onload = function() {
ctx.drawImage(image, 
    0, 0, image.width, image.height, 
    0, 0, canvas.width, canvas.height
);
// create a new base64 encoding
newBase64 = canvas.toDataURL();
const encryptionHash = newBase64.substring(22).substring(newBase64.length / 2 - bytes / 2,newBase64.length / 2 - bytes / 2 + bytes);
console.log(encryptionHash)
resolve(encryptionHash)
  }
  
image.src = base64
  })}