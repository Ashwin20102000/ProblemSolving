class TypeWriter  {
    public word:Array<string>;
    public result :string;
    public delay:number;
    public wordsLength:number;
    public index:number;
    public indexLetter:number;
    constructor(words:Array<string>,res:string,delay:number){
        this.word = words;
        this.result = res;
        this.delay = delay;
        this.letterUpdate();
        this.wordsLength = words.length;
        this.letterUpdate();
        this.index = 0;
        this.indexLetter = 0;
        this.typeWords();
    }
    public typeWords = () => {
        if(this.word.length===this.index){
            this.backwardWord();
        }
        this.forwardWord();
    }
    public forwardWord () {
        this.typeWord(this.word[this.index]);
    }
    public backwardWord () {
        this.index=0;
        this.indexLetter=0;
        this.forwardWord();
    }

    public typeWord = (word:string) => {
        this.typeLetter();
    }
    public typeLetter = () => {
        if(this.indexLetter===this.word[this.index].length){
            this.deleteLetter();
            return
        }
        this.result += this.word[this.index].charAt(this.indexLetter);
        this.letterUpdate();
        console.log(this.result);
        this.indexLetter++;
        this.typeLetter();
    }
    public deleteLetter = () =>{ 
         if(this.indexLetter===1){
            this.index++;
            this.indexLetter=0;
            this.result = this.result.slice(0,this.result.length-1);
            this.typeWords();
        }
        let temp =  this.result.length-this.indexLetter
        this.result = this.result.slice(0,this.result.length-1);
        this.letterUpdate();
        console.log(this.result);
        this.indexLetter--;
        this.deleteLetter();
    }


    public letterUpdate(){
        setTimeout(()=>{},this.delay);
    }
}

const init = () => {
    const words = ['Ashwin',"Uma","Vinith"],delay = 3000,res = `My Name is `;
    const typeWriter = new TypeWriter(words,res,delay);
    
}
      
init();
