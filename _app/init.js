// M.AutoInit();
let gscore = 0;

$(document).ready(function(){
  $('.modal').modal();
  
  setInterval(()=> {
    fetch('http://play.symonhoiji.com:3000/test/get').then(res => res.json()).then((data) => {
      gscore = data.count;
      renderScore(data.count,data.last_count);
    })
  },1000)
  
})

function renderScore (n,l) {
  // $('.gscore').text(n);
  for(let i = l ; i <= n ; i++) {
    setTimeout(() => {
      $('.gscore').text(i);
    },(i-(n-40)) * 100);
  }
}