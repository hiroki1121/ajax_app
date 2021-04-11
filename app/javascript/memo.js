function post (){
  const submit = document.getElementById("submit")
  // addEventListener：イベント発火の際に実行する関数を定義するためのメソッド
  // e：イベントオブジェクト。イベント発生時の情報を持ったオブジェクト
  submit.addEventListener("click", (e) => {
    // 既定のイベント（ブラウザからのリクエスト）を無効化
    e.preventDefault();
    const form = document.getElementById("form");
    // フォームに入力された値を取得
    const formData = new FormData(form);
    // 非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    const XHR = new XMLHttpRequest();
    // openでリクエストの内容を指定
    // 非同期通信でcreateアクションに送信する
    // trueで非同期通信（falseなら同期通信）
    XHR.open("POST", "/posts", true)
    // レスポンスのフォーマットを指定
    XHR.responseType = "json";
    // フォームに入力された内容をサーバー側に送信
    XHR.send(formData);
  });
}

// addEventListener：イベント発火の際に実行する関数を定義するためのメソッド
window.addEventListener('load', post);