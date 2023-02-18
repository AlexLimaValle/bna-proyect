const $headerNav = document.querySelector(".header__navBar");
const $nav = document.querySelector(".nav");
const $header = document.querySelector(".header");
const $navUl = document.querySelector(".nav__ul");
const $navUp = document.querySelector(".nav__up");
const $navDown = document.querySelector(".nav__down");

const moveNavBar = ()=>{
    $nav.style.transform = `translateX(-0%)`
}

$headerNav.addEventListener("click",moveNavBar)
$navUl.addEventListener("mouseout",(e)=>{
    const {target}= e;
    if(target.classList.contains("nav__ul")){
        $nav.style.transform = `translateX(-100%)`
    }
   
})
// go back cart-shopping
const $headerBuy = document.querySelector(".header__buy-p");
const $headerBuys = document.querySelector(".header__buys");
const $headerCart = document.querySelector(".header__cart-p");
const $headerLoading = document.querySelector(".header__buyLoading");

$headerCart.addEventListener("click",()=>{
    $headerBuys.classList.toggle("header__buys--none");
    setTimeout(()=>{
        $headerLoading.classList.add("header__buyLoading--display");
    },3000);
})

$headerBuy.addEventListener("click",()=>{
    $headerBuys.classList.toggle("header__buys--none");
    setTimeout(()=>{
        $headerLoading.classList.remove("header__buyLoading--display");
    },3000);
})

// desplegar las listas usando eventos:
const navOverflow = document.querySelector(".nav__ul--overflow");


const deployList = (event)=>{
    const {target}=event;
    if(target.classList.contains("nav__p")){
        const next = target.nextElementSibling;
        next.classList.toggle("nav__ul--overflow");
        
    }
}

$nav.addEventListener("click",deployList);


// no dejar que el formulario haga sumit:
const $formSubmit = document.querySelector(".header__form");

$formSubmit.addEventListener("submit",(e)=>{
    e.preventDefault();
})

//create product sliders

const $productVarios = document.querySelector(".product__varios");
const $productCelular = document.querySelector(".product__celular");
const $fragment = document.createDocumentFragment();

const productSliders = (etiquet,list,type)=>{
    const myProduct = list.filter((e)=> e.type == type);
    myProduct.forEach((e)=>{
        const $etiquetProduct = document.createElement("DIV");
        $etiquetProduct.classList.add("product__buy");
        $etiquetProduct.innerHTML = `
            <div class="product__content">
                <img class="product__img" src="${e.img}" alt="${e.type}">
                <h3 class="product__h3">${e.name}</h3>
                <p class="product__legend">${e.legend}</p>
                <p class="product__cuota">Hasta 12 cuotas sin interes de $ ${e.cuotas}</p>
                <p class="product__price">$ ${e.price}</p>
                <button class="product__button">Agregar a Carrito</button>
            </div>
        
        `
        $fragment.appendChild($etiquetProduct);
    })

    etiquet.appendChild($fragment);
}

productSliders($productVarios,product,"Varios");
productSliders($productCelular,product,"Celular");

//carrusel of imagen slider 1:

const $sliderAction = document.querySelector(".sliders__action");
const $sliderLeft = document.querySelector(".sliders__left");
const $sliderRight = document.querySelector(".sliders__right");
const $slidersSlide = document.querySelector(".sliders__slide");

const sliderSize = $slidersSlide.clientWidth;
let count = 0

const next = ()=>{
    if(count < sliderSize*2){
        $sliderAction.style.transform = `translateX(-${count += sliderSize}px)`;
    }else{
        count = 0;
        $sliderAction.style.transform = `translateX(-${count}px)`
    }
}

const back = ()=>{
    if(count <= 0){
        $sliderAction.style.transform = `translateX(-${count += sliderSize*2}px)`;
    }else{
        $sliderAction.style.transform = `translateX(-${count -= sliderSize}px)`
    }
}


$sliderRight.addEventListener("click",next);
$sliderLeft.addEventListener("click",back);


// add the cart-shopping:

const $product = document.querySelectorAll(".product");
const $headerMybuys = document.querySelector(".header__myBuys");
let cart = [];
const $fragmentCart = document.createDocumentFragment();
const $buyMessanger = document.querySelector(".header__buyMessanger");
const $headerTotal = document.querySelector(".header_buy-total");

$product.forEach(e=>{
    e.addEventListener("click",(event)=>{
        const {target} = event;
        if(target.getAttribute("class") == "product__button"){
            const {parentElement} = target;
            const nameProduct = parentElement.children[1].innerHTML;
            const select = product.find(product => product.name == nameProduct);
            cart = [...cart,select];
            (cart.length > 0)?$buyMessanger.style.display = "none":" ";
            let total = cart.reduce((acu,{price})=> acu+price,0)
            $headerTotal.innerHTML = total;
            addCartShopping(select);
            $headerMybuys.appendChild($fragmentCart);
        }
    })
})


const addCartShopping = (product)=>{
    const cartBuys = document.createElement("DIV");
    cartBuys.classList.add("header__buysCart");
    cartBuys.innerHTML = `
        <div class="header__buysProduct" id="${product.id}">
            <img class="header__buysProduct-img" src="${product.img}" alt="${product.name}"/>
            <h3 class="header__buysProduct-h3">${product.name}</h3>
            <p class="header__buysProduct-p">$ ${product.price}</p>
            <p class="header__buysProduct-trash"><i class="header__trash fa-solid fa-trash-can"></i></p>
        </div>
    `
    $fragmentCart.appendChild(cartBuys);
}


const $headerBuyProduct = document.querySelector(".header__buysProduct");
const $headerTrash = document.querySelectorAll(".header__buysProduct-trash");


$headerMybuys.addEventListener("click",(e)=>{
     const {target} = e;
     if (target.classList.contains("header__trash")){
        const etiquetFather = target.parentElement
        const r = etiquetFather.parentElement;
        const y = r.parentElement
        $headerMybuys.removeChild(y);
     }
})


