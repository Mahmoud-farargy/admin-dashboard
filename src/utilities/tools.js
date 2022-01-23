export const lowerString = txt => typeof txt === "string" ? txt.toLowerCase() : "";
export const numFormatter = (num) => {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }
  
  export const trimText = (txt, limit) => txt ? (`${txt.split("").length > limit ? txt.split("").slice(0,limit).join("")+"..." : txt}`) : "";

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const generateNewId = ({lettersOnly, letterPieces = 3}) => {
   const generateLetters = () => Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 20);
   if(lettersOnly){
      if(letterPieces ? typeof letterPieces === "number" : true){
         return Array.from({length : letterPieces}).map(() => {
            return generateLetters()
         }).join("_");
      }
   } else {
      return (`${generateLetters()}_${Math.random() * 10}`);
   }
};