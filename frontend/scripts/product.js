<<<<<<< Updated upstream
function displaydata() {
    fetch("http://localhost:8800/product/show")
=======
let fetchdata
function displaydata() {
    fetch(`http://localhost:8800/product/show`)
>>>>>>> Stashed changes
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
<<<<<<< Updated upstream
=======
          fetchdata=data
>>>>>>> Stashed changes
          display(data);
        })
        .catch((err) => {
          console.log(err);
        });
  }
  let array = JSON.parse(localStorage.getItem("cart-product")) || [];
  let container=document.getElementById("alldata")
  displaydata()
  let token = localStorage.getItem("token");
  function display(data) {
    container.innerHTML=null
    data.forEach((element,index) => {
        let card=document.createElement("div")
        card.classList.add("card")
        let img = document.createElement("img");
        img.setAttribute("src", element.image);

        let nameinp=document.createElement("p")
        nameinp.innerText=element.name

        let price=document.createElement("p")
<<<<<<< Updated upstream
        price.innerText=element.price
=======
        price.innerText=`₹${element.price}`
>>>>>>> Stashed changes
        let card2=document.createElement("div")
       
        
let button2=document.createElement("button")
button2.innerText="Add To Cart"
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
button2.addEventListener("click",()=>{
    if(token){
      
        // array.push(element)
        // localStorage.setItem("cart-product",JSON.stringify(array))
        // alert("product added")
        let filtered=array.filter((ele,i)=>{
          if(element._id==ele._id){
            return true
          }else{
            return false
          }
        })
if(filtered.length>0){
  alert("product already in cart")
}else{
  array.push(element)
         localStorage.setItem("cart-product",JSON.stringify(array))
        alert("product added")
<<<<<<< Updated upstream
=======
        totaldata()
>>>>>>> Stashed changes
}
       
      }
    else{
        alert("Please login first")
        window.location.href="../html/login.html"
    }
})
        let button=document.createElement("button")
        button.innerText="VIEW DETAILS"
        button.addEventListener("click",()=>{
          localStorage.setItem("single-product",JSON.stringify(element))
          window.location.href="../html/individual.html"
        })
        card2.append(button,button2)
        card.append(img,nameinp,price,card2)
        
        container.append(card)
        
    });
  
  }
  let username= localStorage.getItem("name");
  
  let user = document.getElementById("profile");
  if (username) {
    user.innerText = username;
  }

  let button = document.getElementById("List");
  button.addEventListener("click", () => {
    // localStorage.removeItem(name);
    // localStorage.removeItem(token);
    console.log(name, token);
    console.log("trupti");
    localStorage.clear();
    user.innerText = "Profile";
<<<<<<< Updated upstream
  });
=======
  });
  
  totaldata()
  function totaldata(){
    let totalproduct=document.getElementById("total")
    // totalproduct.innerText=array.length
    if(array.length>0){
        totalproduct.innerText=array.length
    }
  }


  function querrydata() {
    fetch(`http://localhost:8800/product/show/?${brand}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          display(data);
        })
        .catch((err) => {
          console.log(err);
        });
  }
  let searchbox=document.getElementById("search")
  let search=document.getElementById("searchbtn")
  // search.addEventListener('keypress', function (e) {
  //   if (e.key === 'Enter') {
  //   //   console.log("yes")
  //   let search_filter=fetchdata.filter((ele)=>{
  //       if(searchbox.value===ele.brand){
  //           // console.log("yes")
  //           return true
  //         }
  //         else{
  //           return false
  //         }
  //   })
  //   displaydata(search_filter)
  //   }
    
  // });
  let price = document.getElementById("price")
  
  let brand=""
  let type=""

let filterbtn=document.getElementById("onclick")
filterbtn.addEventListener("click",()=>{
  // if(type){
    click()
//   }
// else{
  // showbrand()


 
})

function click(){
  let tv=document.getElementById("tv").checked
let laptop=document.getElementById("laptop").checked
let mobile=document.getElementById("mobile").checked
let air=document.getElementById("air").checked
let fridge=document.getElementById("fridge").checked
let camera=document.getElementById("camera").checked
let washing=document.getElementById("washing").checked

if(tv){
  type="TV"
}else if(laptop){
  type="Laptop"
} else if(mobile){
  type="Mobile"
}
else if(air){
  type="Air Conditioners"
}
else if(fridge){
  type="Refrigerator"
}else if(camera){
  type="Camera"
}
else if(washing){
  type="Washing machine"
}else{
  display()
}
filterdata()
}


function filterdata(){
  let filtered=fetchdata.filter((ele,i)=>{
  if(ele.producttype==type){
return true
  }else{
    return false
  }
  })
  display(filtered)
  console.log(filtered)
}

function showbrand(){
  let samsung=document.getElementById("samsung").checked
let apple=document.getElementById("apple").checked
let hp=document.getElementById("hp").checked
let acer=document.getElementById("acer").checked
let lenevo=document.getElementById("lenevo").checked
let sony=document.getElementById("sony").checked
let godrej=document.getElementById("godrej").checked
let dalkin=document.getElementById("dalkin").checked
let canon=document.getElementById("canon").checked
let bosch=document.getElementById("bosch").checked
let lg=document.getElementById("lg").checked
if(samsung){
  brand="Samsung"
}else if(apple){
  brand="Apple"
} else if(hp){
  brand="HP"
}
else if(acer){
  brand="Acer"
}
else if(lenevo){
  brand="Lenovo"
}else if(sony){
  brand="Sony"
}
else if(dalkin){
  brand="Daikin"
}
else if(godrej){
  brand="Godrej"
}else if(canon){
  brand="Canon"
}
else if(bosch){
  brand="Bosch"
}else if(lg){
  brand="LG"
}
else{
  display()
}
filterbrand()
}
function filterbrand(){
  let filtered=fetchdata.filter((ele,i)=>{
  if(ele.brand==brand){
return true
  }else{
    return false
  }
  })
  display(filtered)
  console.log(filtered)
}
>>>>>>> Stashed changes