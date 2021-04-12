const buildHTML = (XHR) => {
  const item = XHR.response.post;
      const html = `
        <div class="post">
          <div class="post-data">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
            ${item.content}
          </div>
        </div>`;
  return html
}

function post (){
  const submit = document.getElementById("submit");
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
    XHR.open("POST", "/posts", true);
    // レスポンスのフォーマットを指定
    XHR.responseType = "json";
    // フォームに入力された内容をサーバー側に送信
    XHR.send(formData);
    // レスポンスの受信に成功したときの処理
    XHR.onload = () => {
      if (XHR.status != 200) { 
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend",buildHTML(XHR));
      formText.value = "";
    };
  });
}

// addEventListener：イベント発火の際に実行する関数を定義するためのメソッド
window.addEventListener('load', post);