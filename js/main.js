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
  const etcetera= document.getElementById('etcetera');
  const button = document.getElementById('submit_btn');


  const error1 = document.getElementById('error1');
  const error2 = document.getElementById('error2');
  



  button.addEventListener('click', function(event) {
      //条件に一致する場合(メールアドレスが空の場合)
    if (yourname.value == ''||email.value==''){
       //エラーメッセージを出力
        // alert("必須項目を入力して下さい。"); 
        error1.classList.add('pushed');
        error2.classList.add('pushed');
        yourname.classList.add('pushed');
        email.classList.add('pushed');

       //送信ボタン本来の動作をキャンセルします
      event.preventDefault();
    }else{
      // ラジオボタンの要素取得
      const plans = document.querySelectorAll('input[type="radio"]');
      let selectedPlan;
      plans.forEach(plan => {
        if (plan.checked === true) {
          selectedPlan = plan.value;
        }
      });

      // チェックボックスの要素取得
      const timings = document.querySelectorAll('input[type="checkbox"] ');
      const selectedTiming = [];
      timings.forEach(timing => {
        if (timing.checked === true) {
          selectedTiming.push(timing.value);
        }
      });

      //条件に一致しない場合(名前とメールアドレスが入力されている場合)
      if(
      confirm(`お名前:${yourname.value}\nメール:${email.value}\n一緒に撮影する方:${whowith.value}\n撮影プラン:${selectedPlan}\n連絡可能な時間帯:${selectedTiming}\nその他:${etcetera.value}\n\n\nこの内容で送信しますか？`)){
        alert("送信しました。");
        //動作キャンセル
        event.preventDefault();
      }else{
        //動作キャンセル
        event.preventDefault();    //送信ボタン本来の動作をキャンセルします
      }
    };
  });
}






