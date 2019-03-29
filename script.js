function indexLoadRedir(){
  var redirected=false;
  setTimeout(function(){
    if(!redirected){
      window.location="mainIndex.html"
      redirected=true
    }
  },5000)
}

