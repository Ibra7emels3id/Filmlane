

let iconLest = document.getElementById(`iconLest`)
let lest1 = document.getElementById(`cal-1`)
let lest2 = document.getElementById(`cal-2`)
let lest3 = document.getElementById(`cal-3`)
let listDisplay = document.querySelector(`.list-display`)
let listDisplayIcon = document.querySelector(`.list-display i`)


iconLest.addEventListener(`click`, function(){
    lest1.classList.toggle(`bsNo1`)
    lest2.classList.toggle(`bsNo2`)
    lest3.classList.toggle(`bsNo3`)
    listDisplay.classList.toggle(`show`)
})
listDisplayIcon.addEventListener(`click`, function(){
    lest1.classList.remove(`bsNo1`)
    lest2.classList.remove(`bsNo2`)
    lest3.classList.remove(`bsNo3`)
    listDisplay.classList.remove(`show`)
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true ,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay:{
    //     auot: 1000
    // },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3   ,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        
    },
});



// prodects 


const AddToCardsProdect = ()=>{
    let crdetRated = document.querySelector(`.crdet-rated`)
    let listFilm = document.querySelectorAll(`.list-film ul li`)
    
    listFilm.forEach((li)=>{
        li.onclick = (e)=>{
            crdetRated.innerHTML = ``;
            ProdectData.forEach((prodect)=>{
                if (e.target.dataset.name === prodect.category) {
                    let newprodect = document.createElement(`a`)
                    
                    newprodect.classList.add('out-box' , 'col-sm-6'  ,  'col-lg-4' , 'col-xl-3');
                    newprodect.href = '/showCard.html?id=' + prodect.id
            
                    newprodect.innerHTML = `
                    
                    <div class="box show">
                        <div class="imgs mb-4">
                                <img class="itme-imgs" rel="preload" src="${prodect.imgUrl}" alt="">
                        </div>
                        <div class="title-film">
                            <div class="text-film d-flex align-items-center justify-content-between justify-content-center ">
                                <h3 class="text-white  m-0 text-start">${prodect.title}
                                </h3>
                                <p class="col-citrine m-0">${prodect.production}</p>
                            </div>
                            <div class="brg d-flex align-items-center justify-content-between mt-4">
                                <p class="mx-2 text-white brg-head">${prodect.quality}</p>
                                <p class="mx-2 text-white"><i class="fa-solid icon-col fa-clock mx-1"></i> ${prodect.timeVideo}
                                    min</p>
                                <p class="text-white Assess"><i class="fa-solid icon-col fa-star"></i> ${prodect.Evaluatin}</p>
                            </div>
                        </div>
                    </div>
                
                    `; crdetRated.classList.add(`show`)
                    crdetRated.appendChild(newprodect)
                }else if(e.target.dataset.name === `All`){
                    crdetRated.innerHTML = ``;
                    AddToCardsProdect()
                }
            })
        }
    })
    ProdectData.forEach(Categ => {
        let newprodect = document.createElement(`a`)
        newprodect.classList.add('out-box' , 'col-sm-6'  ,  'col-lg-4' , 'col-xl-3');
        newprodect.href = '/showCard.html?id=' + Categ.id

        newprodect.innerHTML = `
        
        <div class="box show">
            <div class="imgs mb-4">
                    <img class="itme-imgs" rel="preload" src="${Categ.imgUrl}" alt="">
            </div>
            <div class="title-film">
                <div class="text-film d-flex align-items-center justify-content-between justify-content-center ">
                    <h3 class="text-white  m-0 text-start">${Categ.title}
                    </h3>
                    <p class="col-citrine m-0">${Categ.production}</p>
                </div>
                <div class="brg d-flex align-items-center justify-content-between mt-4">
                    <p class="mx-2 text-white brg-head">${Categ.quality}</p>
                    <p class="mx-2 text-white"><i class="fa-solid icon-col fa-clock mx-1"></i> ${Categ.timeVideo}
                        min</p>
                    <p class="text-white Assess"><i class="fa-solid icon-col fa-star"></i> ${Categ.Evaluatin}</p>
                </div>
            </div>
        </div>
    
        `; 
        crdetRated.appendChild(newprodect)
    });

}

// get Data json
const GetDate = ()=>{
    fetch(`js/prodects.json`)
    .then(Response => Response.json())
    .then(Data => {
        ProdectData = Data ;
        AddToCardsProdect()
    });

}
GetDate()

// top up btn 
let TopUpBtn = document.querySelector(`.btn-top-up`)

window.onscroll = ()=>{
    if (window.scrollY >= 300) {
        TopUpBtn.classList.add(`show`)
    }else{
        TopUpBtn.classList.remove(`show`)
    }
}
TopUpBtn.onclick = ()=>{
    window.scrollTo({
        top: 0
    })
};

// fliter swiper
let ListGrupe = document.querySelectorAll(`.right-title ul li`)
let outBox = document.querySelectorAll(`.out-box`)

window.onload = ()=>{
    ListGrupe.forEach((Grupe)=>{
        Grupe.onclick = (e)=>{
            outBox.forEach((box)=>{
                box.style.display = `none`
                let boxs = box.getAttribute('data-box')
                if (boxs === e.target.dataset.lists || e.target.dataset.lists === `All`) {
                    box.style.display = `block`
                }
            })
        }
    })
    
}

