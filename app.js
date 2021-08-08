

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




let all = [];
let counter = 0;
let numberOfRound = 25;


function conImg(name, imagesrc) {

    this.name = name,
        this.image = imagesrc,
        this.shown = 0;
    conImg.all.push(this);


}

conImg.all = [];


for (let i = 0; i < imgUrl.length; i++) {
    new conImg(imgUrl[i].split('.')[0], imgUrl[i]);
}


console.log(conImg.all);

function render() {
    let leftImgRan = ranImg(0, imgUrl.length - 1)
    let centerImgRan = ranImg(0, imgUrl.length - 1)
    let rightImgRan = ranImg(0, imgUrl.length - 1)

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
let lishown = document.getElementById('lishown');
            lishown.innerHTML=('')

  //  conImg.all[0].name

  
    for (let i = 0; i < conImg.all.length; i++) {

        if (conImg.all[i].shown > 0) {
            
            let ulImg3 = document.createElement('ul')
            lishown.appendChild(ulImg3)

            

            let liImg3 = document.createElement('li')
            liImg3.textContent = `${conImg.all[i].name} is appear ${conImg.all[i].shown}`
            ulImg3.appendChild(liImg3)
        }
    }












    conImg.all[leftImgRan].shown++;
    conImg.all[centerImgRan].shown++;
    conImg.all[rightImgRan].shown++;

    console.log(conImg.all)

}
render();



imgSection.addEventListener('click', clickHandler);
function clickHandler(e) {
    if ((e.target.id === 'leftImg' || e.target.id === 'centerImg' || e.target.id === 'rightImg') && counter < numberOfRound) {
        render();
        counter++;
    }
}




function ranImg(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


