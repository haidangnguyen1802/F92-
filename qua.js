
var to = 'Các Bạn Nữ F92!';
var gift_url = 'https://docs.google.com/spreadsheets/d/1V74ROcTZX5UgjQL-7VcBfbFodj2QOeLQChxyP-G4kGk/edit?fbclid=IwY2xjawF_dilleHRuA2FlbQIxMQABHVrp_7fWiDPpdCU8xJB_-uFspq4KR6jHOc_G-rHkE7_T8lgmB43CYLcqNg_aem_ojxLWEebRzqKRIZZ4Dz1Lw&gid=1579309814#gid=1579309814';
var gift_image_url = 'th3.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

