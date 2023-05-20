let num = 0;

for(let num = 1; num <= 50; num++){
  console.log(num);
  if( (num % 10) == 0){
      console.log('今' + num +'回ループしました。');
  }

  if( (num % 4) == 0){
      console.log('4で割れる数です。' + num);
  }

  if(num == 50){
      let count;
      count = addcount("カウントが終わりました。");
      alert(count);
      function addcount(numA){
        let addnum = "50回" + numA;
        return addnum;
      }
  }
}