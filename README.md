# React,API,Hooksを利用した画像検索アプリ作成



## 環境構築

creat-react-appで環境構築  
【Code】  
1.npx create-react-app ○○  
2.cd ○○  
3.code .  
4.npm start  

### App.jsを編集

1.inputタグを使い、入力フォームを作成  
2.ImageGallaryコンポーネントを作成  
3.ImageGallary.jsを作成し、App.jsにインポート  
4.文字列を取得する為、Hooksを利用↓  
【useState】
取得する文字列を格納
【useRef】  
DOMを参照し、直接inputにアクセスして余計な再レンダリングを回避
  
↑  
inputで打ち込んだ文字列を格納、監視  
  
5.onSubmitを利用し、Enterキーを押した際に文字列を取得  
6.Enterキーを押すと自動的に更新されてしまう為、preventDefaultにより制御した状態でhandleSubmitに渡す  

### App.jsにて、API関連を記述

1.URL内の任意の文字列を反映させるため、テンプレートリテラルを利用したURLを定義  
2.APIのデータ取得の為、fetch関数を利用した非同期処理通信を利用  
3.データ取得時、responseで受け取り、オブジェクト型(json)に変換  
4.3で取得したjsonデータをuseStateに格納  
5.fetchDataが変わるごとにsetFetchDataが呼ばれ、レンダリングされる  
6.ImageGallery.jsで使用するmap関数は配列のみ使用できるため、オブジェクト(連想配列)内の必要な配列のみを(data.hits)で指定  

### ImageGallery.jsを編集

1.fetchDataをImageGalleryに渡すため、App.jsのImageGallery内でfetchDataを同名に指定して渡す  
2.map関数を利用し、fetchDataをdataとして配列の全ての要素を処理  
3.画像クリック時に、dataのページURLのみを取得し、別タブにて表示  
4.data内の画像URLのみを取得してimgとして表示  

