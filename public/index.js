
document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('popup-container').style.display = 'none';
});

function popup(){
  document.getElementById('popup-container').style.display='block';
}

document.getElementById('close-btn').addEventListener('click', function() {
  document.querySelector('.popup-search').style.display = 'none';
});

function pop(){
  document.querySelector('.popup-search').style.display='block';
}
