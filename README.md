# React,API,Hooksを利用した画像検索アプリ作成
検索した文字列に該当する画像をAPIを利用し外部サイトからデータを受け取り表示する簡単な検索アプリを作成  
ハードコーディングによる複数表示ではなく、map関数を利用した見やすいコードを意識  


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
取得する文字列を格納して、差分が生じるか監視  
【useRef】  
仮想DOMを参照し、直接inputにアクセスして差分を比較  
  
↓   
inputで打ち込んだ文字列を格納、監視し、差分が生じたカ所のみをレンダリングし、余計な再レンダリングを回避  
  
5.onSubmitを利用し、Enterキーを押した際(フォームを送信した際)に文字列を取得  
6.Enterキーを押すと自動的に更新されてしまう為、preventDefaultにより自動更新を制御した状態でhandleSubmitに渡す  

### App.jsにて、API関連を記述

1.URL内の任意の文字列を反映させるため、テンプレートリテラルを利用したURLを定義  
2.APIのデータ取得の為、fetch関数を利用した非同期処理通信を利用  
3.非同期処理通信により取得したデータを、responseで受け取り、オブジェクト型(json)に変換(fetchはHTML形式でレスポンスを返すため)  
4.3で取得したjsonデータをdataに代入し、それを引数にsetFetchDataを利用しfetchDataに結果を代入
5.fetchDataが変わるごとにsetFetchDataが呼ばれ、レンダリングされる  
6.ImageGallery.jsで使用するmap関数は配列のみ使用できるため、オブジェクト(連想配列)内の必要な配列のみを(data.hits)で指定  

### ImageGallery.jsを編集

1.fetchDataをImageGalleryに渡すため、App.jsのImageGallery内でfetchDataを同名に指定して渡す  
2.map関数を利用し、fetchDataをdataとして配列の全ての要素を処理  
3.画像クリック時に、dataのページURLのみを取得し、別タブにて表示  
4.data内の画像URLのみを取得してimgとして表示  

### GitHubに公開

【Code】  
1.git init(ローカルリポジトリを作成)  
2.git add .(フォルダ内の全てをアップロード対象として指定)  
3.git commit -m “○○” (ファイルを○○で保存)  
4.git remote add origin url名 (GitHubで作成したリモートリポジトリとローカルリポジトリを関連付ける)  
5.git push origin main(プッシュしてアップロード)  
