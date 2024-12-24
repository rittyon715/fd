document.addEventListener('DOMContentLoaded', function() {
    // ハンバーガーメニューのクリックイベント
    document.querySelector('.toggle_btn').addEventListener('click', function() {
      const header = document.getElementById('header');
      
      // #headerにopenクラスが存在する場合
      if (header.classList.contains('open')) {
        // openクラスを削除
        header.classList.remove('open');
      } else {
        // openクラスを追加
        header.classList.add('open');
      }
    });
  
    // メニューが表示されている時に画面をクリックした場合
    document.getElementById('mask').addEventListener('click', function() {
      // openクラスを削除して、メニューを閉じる
      const header = document.getElementById('header');
      header.classList.remove('open');
    });
  });