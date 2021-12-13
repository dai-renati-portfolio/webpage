function changeimg(url,e) {
  document.getElementById("img").src = url;
  let nodes = document.getElementById("thumb_img");
  let img_child = nodes.children;
  
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');
}

function textbutton1() {
  text.innerHTML = "同人誌の購入特典用に制作したチョコマシュマロ。saiを使用。イラスト完成時間は約４時間。キャラクターは東方の椛、フランドール、てゐ。中にチョコが入ってておいしかった。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "0.2";
  illare.style.opacity = "0.2";
}

function textbutton2() {
  text.innerHTML = "同じく同人誌の購入特典用のポリ袋。制作は約２時間。白が目立ち少し寂しいので、もう少し陰影をつけたら良かったなと反省。キャラクターは左から東方のパチュリーとアリス。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "1";
  illare.style.opacity = "0.2";
}

function textbutton3() {
  text.innerHTML = "東方の『てゐ』と『橙（ちぇん）』。pixivで約20000回閲覧されたイラスト。キャラクターはsaiで描き、背景はフォトショップで作成。イラスト完成時間は約20時間。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "1";
  illare.style.opacity = "0.2";
}

function textbutton4() {
  text.innerHTML = "てゐちゃんかわいい。いつ描いたか記憶にないが、制作時間は10時間以内だったと思う。saiのみで制作。グロー効果という技術を使っており、温かみのある煌びやかな光彩がポイント。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "0.2";
  illare.style.opacity = "0.2";
}

function textbutton5() {
  text.innerHTML = "キャラクターはパズドラのハク。制作は5時間くらい。描いた当時はパズドラブームだったこともあり、このイラストが攻略サイト等で掲載(無断)されていたというのを聞いたことがある。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "0.2";
  illare.style.opacity = "0.2";
}

function textbutton6() {
  text.innerHTML = "2021年に描いた新しいイラスト。キャラクターは原神のクレー。自転車に乗っていたりで絵を描く期間が空いていたが、ブランクを見せつけない出来栄え。HoYoLABに投稿。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "0.2";
  illare.style.opacity = "0.2";
}

function textbutton7() {
  text.innerHTML = "デザインの練習で描いたCDジャケット風のイラスト。キャラクターはオリジナル。レイアウトやカラーリングや４人分の個性を考えるのは大変だったが、12時間くらいで作成。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "1";
  illare.style.opacity = "0.2";
}

function textbutton8() {
  text.innerHTML = "CDジャケット裏面をイメージして作成。表面の画像をフォトショップで加工し編集。フォント選びが一番時間がかかったが、約2時間で作成。余談だが緑の表情がお気に入り。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "0.2";
  photo.style.opacity = "1";
  illare.style.opacity = "0.2";
}

function textbutton9() {
  text.innerHTML = "オリジナルキャラクター『ラビ』。将来的にゲームを作れたらなと思い設定資料を作成。sai・フォトショップ・イラストレーターを駆使し、自分の出せる技術を詰め込んだ作品。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "1";
  photo.style.opacity = "1";
  illare.style.opacity = "1";
}

function textbutton10() {
  text.innerHTML = "ラビだね。イラストレーターの練習で描いてもらったよ。使い慣れてなかったので試行錯誤しつつ約12時間で作成。あと、このページのjavascriptもとても苦労した。特に↓のアイコン。";
  camera.style.opacity = "0.2";
  sai.style.opacity = "0.2";
  photo.style.opacity = "0.2";
  illare.style.opacity = "1";
}

$('#scroll-daiki-top').click(function(){
  $("html,body").animate({scrollTop:0});
});

$('#scroll-daiki-under').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-under').offset().top - 60});
});

$('#scroll-daiki-pclogo').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-pclogo').offset().top - 60});
});

$('#scroll-daiki-cake').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-cake').offset().top - 60});
});

$('#scroll-catcd').click(function(){
  $("html,body").animate({scrollTop:$('#catcd').offset().top - 60});
});

$('#scroll-daiki-movie').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-movie').offset().top - 60});
});

$('#scroll-daiki-cycle').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-cycle').offset().top - 60});
});

$('#scroll-cmyk').click(function(){
  $("html,body").animate({scrollTop:$('#cmyk').offset().top - 60});
});

$('#scroll-fashion').click(function(){
  $("html,body").animate({scrollTop:$('#fashion').offset().top - 60});
});

$('#scroll-renati-rabbilabo').click(function(){
  $("html,body").animate({scrollTop:$('#renati-rabbilabo').offset().top - 60});
});

$('#scroll-enadori').click(function(){
  $("html,body").animate({scrollTop:$('#enadori').offset().top - 60});
});

$('#scroll-daiki-choco').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-choco').offset().top - 60});
});

$('#scroll-irarekyara').click(function(){
  $("html,body").animate({scrollTop:$('#irarekyara').offset().top - 60});
});

$('#scroll-renatiyoutube').click(function(){
  $("html,body").animate({scrollTop:$('#renatiyoutube').offset().top - 60});
});

$('#scroll-irarekyara').click(function(){
  $("html,body").animate({scrollTop:$('#irarekyara').offset().top - 60});
});

$('#scroll-daiki-bike1').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-bike1').offset().top - 60});
});

$('#scroll-daiki-bike2').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-bike2').offset().top - 60});
});

$('#scroll-daiki-bike3').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-bike3').offset().top - 60});
});

$('#scroll-daiki-bike4').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-bike4').offset().top - 60});
});

$('#scroll-daiki-car').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-car').offset().top - 60});
});

$('#scroll-daiki-mazesoba').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-mazesoba').offset().top - 60});
});

$('#scroll-daiki-ooarai').click(function(){
  $("html,body").animate({scrollTop:$('#daiki-ooarai').offset().top - 60});
});

$('#scroll-janken').click(function(){
  $("html,body").animate({scrollTop:$('#janken').offset().top - 60});
});

$('#scroll-github').click(function(){
  $("html,body").animate({scrollTop:$('#github').offset().top - 60});
});

$('#pageup').click(function(){
  $("html,body").animate({scrollTop:0});
});
