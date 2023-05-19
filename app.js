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
      console.log('50回カウントが終わりました。')
  }
}