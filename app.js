

const imgSection = document.getElementById('imgSection');
let leftImg = document.getElementById('leftImg');
let centerImg = document.getElementById('centerImg');
let rightImg = document.getElementById('rightImg');
let lishown = document.getElementById('lishown');




var imgUrl = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'water-can.jpg',
    'wine-glass.jpg'
];


let arrRan=[]


let counter = 0;
let numberOfRound = 25;


function conImg(name, imagesrc,shown = 0) {

    this.name = name,
        this.image = imagesrc,
        this.shown = 0;
    this.timeOfClick = 0
    conImg.all.push(this);


}

conImg.all = [];
getData()
/*
for (let i = 0; i < imgUrl.length; i++) {
    new conImg(imgUrl[i].split('.')[0], imgUrl[i]);
}
*/

let leftImgRan
let centerImgRan
let rightImgRan


console.log(conImg.all);

function render() {
    

    let i=0;

    do {
        leftImgRan = ranImg(0, imgUrl.length - 1)
        centerImgRan = ranImg(0, imgUrl.length - 1)
        rightImgRan = ranImg(0, imgUrl.length - 1)


    } while (leftImgRan === centerImgRan ||
         centerImgRan === rightImgRan ||
          leftImgRan === rightImgRan || 
          arrRan.includes(leftImgRan) ||
          arrRan.includes(centerImgRan) ||
          arrRan.includes(rightImgRan)  );

arrRan=[leftImgRan,centerImgRan,rightImgRan]







    leftImg.src = './img/' + conImg.all[leftImgRan].image;
    centerImg.src = './img/' + conImg.all[centerImgRan].image;
    rightImg.src = './img/' + conImg.all[rightImgRan].image;
    /*
        let ulImg1 = document.createElement('ul')
        lishown.appendChild(ulImg1)
    
        let liImg1 = document.createElement('li')
        liImg1.textContent = `${conImg.name} is appear ${conImg.all[leftImgRan].shown++}`
        ulImg1.appendChild(liImg1)
    
    
        let ulImg2 = document.createElement('ul')
        lishown.appendChild(ulImg2)
    
        let liImg2 = document.createElement('li')
        liImg2.textContent = `${conImg.name} is appear ${conImg.all[leftImgRan].shown++}`
        ulImg2.appendChild(liImg2)
    
    */


    //  conImg.all[0].name


console.log(conImg.all[rightImgRan].name)

console.log(conImg.all[leftImgRan].name)
console.log(conImg.all[centerImgRan].name)
console.log(conImg.all[i].name)










    conImg.all[leftImgRan].shown++;
    conImg.all[centerImgRan].shown++;
    conImg.all[rightImgRan].shown++;

    console.log(conImg.all)


    localStorage.data = JSON.stringify( conImg.all );
  console.log( conImg.all );

  localStorage.removeItem('data');
}
render();



imgSection.addEventListener('click', clickHandler);
function clickHandler(e) {

    
    if ((e.target.id === 'leftImg' || e.target.id === 'centerImg' || e.target.id === 'rightImg') && counter < numberOfRound) {

        if (e.target.id === 'leftImg') {

            conImg.all[leftImgRan].timeOfClick++;

        }
        if (e.target.id === 'centerImg') {

            conImg.all[centerImgRan].timeOfClick++;

        }
        if (e.target.id === 'rightImg') {

            conImg.all[rightImgRan].timeOfClick++;

        }



        render();
        counter++;
    }
    else {
        createChart();
      }
}
/*
let libutton = document.getElementById('libutton')

libutton.addEventListener('click', showli)
function showli() {

    for (let i = 0; i < conImg.all.length; i++) {





        let ulImg3 = document.createElement('ul')
        lishown.appendChild(ulImg3)




        if (conImg.all[i].shown > 0) {





            let liImg3 = document.createElement('li')
            liImg3.textContent = `${conImg.all[i].name} is appear ${conImg.all[i].shown} and had  ${conImg.all[i].timeOfClick} votes `
            ulImg3.appendChild(liImg3)
        }
    }




}
*/



function ranImg(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



function createChart() {

    let nameArr = [];
    let shownArr = [];
  
    for(let i = 0; i < conImg.all.length; i++) {
      nameArr.push(conImg.all[i].name);
      shownArr.push(conImg.all[i].shown);
    }
  
    let ctx = document.getElementById( 'myChart' ).getContext( '2d' );
  
    let myChart = new Chart( ctx, {
      type: 'bar',
      data: {
        labels: nameArr,
        datasets: [{
          label: '# shown',
          data: shownArr,
          backgroundColor:
                  'rgba(255, 99, 132, 0.2)',
  
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    } );
  }

  function getData() {
    if( localStorage.data ) {
      let data = JSON.parse( localStorage.data );
      for( let i = 0; i < data.length; i++ ) {
        new conImg( data[i].name, data[i].image, data[i].shown );
      }
    } else {
        for (let i = 0; i < imgUrl.length; i++) {
            new conImg(imgUrl[i].split('.')[0], imgUrl[i]);
        }
    }
  }
  