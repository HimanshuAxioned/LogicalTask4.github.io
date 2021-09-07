let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let dropItem = document.querySelectorAll('.drop-item')
let highItem = document.querySelector('.high-item');
let mediumItem = document.querySelector('.medium-item');
let lowItem = document.querySelector('.low-item');
let draggables = document.querySelectorAll('.task');

let item = document.querySelectorAll('.item');
for (let i = 0; i < item.length; i++) {
  item[i].innerHTML = '';
}

let highList = [];
let mediumList = [];
let lowList = [];


function funstart() {

  start.style.display = 'none';
  stop.style.display = 'block';

  for (let i = 0; i < draggables.length; i++) {
    draggables[i].setAttribute('draggable', true);
    draggables[i].style.display = 'inline-block';
    draggables[i].addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('sourceId', e.target.id);
    })
  }


  for (let i = 0; i < item.length; i++) {


    item[i].addEventListener('dragover', function (e) {
      e.preventDefault();
    })

    item[i].addEventListener('drop', function (e) {
      e.preventDefault();

      let target = e.target;
      let sourceId = e.dataTransfer.getData('sourceId');
      let dt = target.appendChild(document.getElementById(sourceId));
      dt;
      dt.style.visibility = 'hidden';

      let count = item[i].childElementCount;
      count;
      console.log(target.id, count);


      if (target.id == 'high' ) {
        highList.push(sourceId);
      }

      else if (target.id == 'medium') {
        mediumList.push(sourceId);
      }

      else if (target.id == 'low') {
        lowList.push(sourceId);
      }

      else {
        console.log('Target not found');
      }
      let uHigh= new Set(highList);
      let uniqueHigh= Array.from(uHigh);
      console.log('HighList =>',uniqueHigh)

      let uMedium= new Set(mediumList);
      let uniqueMedium= Array.from(uMedium);
      console.log('MediumList =>',uniqueMedium)

      let uLow= new Set(lowList);
      let uniqueLow= Array.from(uLow);
      console.log('LowList =>',uniqueLow)

    })

  }

}



stop.addEventListener('click', function () {
  start.style.display = 'block';
  stop.style.display = 'none';
  for (let i = 0; i < draggables.length; i++) {
    draggables[i].setAttribute('draggable', false);
  }

});

start.addEventListener('click', funstart);





















