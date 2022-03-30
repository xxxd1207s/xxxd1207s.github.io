'use strict';

{
  // Intersection Observer API
  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        toTop.classList.add('scrolled');
      } else {
        toTop.classList.remove('scrolled');
      }
    });
  }

  const toTop = document.getElementById('to_top');

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(toTop);


  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

}







{
  const yourname = document.getElementById("your_name");
  const email = document.getElementById("your_emaill");
  const whowith = document.getElementById("whowith");


  const plans = document.querySelectorAll('input[type="radio"]');
  let selectedPlan;
  plans.forEach(plan => {
    if (plan.checked === true) {
      selectedPlan = plan.value;
    }
  });





  const timings = document.querySelectorAll('input[type="checkbox"] ');
  const selectedTiming = [];

  timings.forEach(timing => {
    if (timing.checked === true) {
      selectedTiming.push(timing.value);
    }
  });



  // const timings = document.getElementById('check');
  // const selectedTiming = [];

  // timings.forEach(timing => {
  //     if (timing.checked === true) {
  //       selectedTiming.push(timing.value);
  //     }
  //   });







  
  const etcetera= document.getElementById('etcetera');
  const button = document.getElementById('submit_btn');


  button.addEventListener('click', function(event) {
    if (yourname.value == ''||email.value==''){
      //条件に一致する場合(メールアドレスが空の場合)
      alert("必須項目を入力して下さい。");    //エラーメッセージを出力
      event.preventDefault();    //送信ボタン本来の動作をキャンセルします
    }else{
      //条件に一致しない場合(メールアドレスが入力されている場合)
      confirm(`お名前:${yourname.value}\nメール:${email.value}\n一緒に撮影する方:${whowith.value}\n撮影プラン:${selectedPlan}\n連絡可能な時間帯:${selectedTiming}\nその他:${etcetera.value}\n\n\nこの内容で送信しますか？`);    //""送信ボタン本来の動作を実行します
      event.preventDefault();    //送信ボタン本来の動作をキャンセルします
    };
  });
}



