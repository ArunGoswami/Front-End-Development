// heading.addEventListener("dblclick", () => {
//   heading.style.fontStyle = "italic";
// });

// let img = document.querySelector("img");
// img.addEventListener("mouseover", () => {
//   img.src = "Arun.jpg";
// });

// img.addEventListener("mouseover", () => {
//   img.style.width = "400px";
// });


// let listenitems=document.querySelectorAll(li);
// listenitems.foreach(item=>{
//   item.addeventlistner("click",()=>{
//     console.log("li ckicked");
//   });
// });
// let ul=document.querySelector("ul");

// ul.addeventlistner("click",()=>{
//     console.log("ul clicked");
//   });

// let div=document.querySelector("div");

//   div.addeventlistner("click",()=>{
//     console.log("div ckicked");
//   });

// let listenItems = document.querySelectorAll("li");

// listenItems.forEach(item => {
//   item.addEventListener("click", () => {
//     console.log("li clicked");
//   });
});

// let ul = document.querySelector("ul");

// ul.addEventListener("click", () => {
//   console.log("ul clicked");
// });

// let div = document.querySelector("div");

// div.addEventListener("click", () => {
//   console.log("div clicked");
// });


// let myform=document.loginform;
// let btn=myform.btnlogin;
// let username=myform.txtusername;
// let password=myform.txtpassword;
// btn.addEventListener("click",()=>{
//   let user=user.value;
//   let pwd=password.value;
//   alert(`username: ${user}\nPassword:${pwd}`);
// });

// const myform = document.forms.frmlogin;
// const txtusername = myform.txtuser;
// const txtpassword = myform.txtpwd;
// const spunameerror = document.getElementById("unameerror");
// const sppwderror = document.getElementById("pwderror");

// spunameerror.innerText = "";
// sppwderror.innerText = "";

// myform.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent form submission for now

//   // Perform your login validation or other logic here

//   // Example validation: Check if username and password fields are not empty
//   if (txtusername.value.trim() === "") {
//     spunameerror.innerText = "Please enter a username";
//     return; // Stop further execution
//   }

//   if (txtpassword.value.trim() === "") {
//     sppwderror.innerText = "Please enter a password";
//     return; // Stop further execution
//   }

//   // If validation is successful, you can proceed with form submission
//   myform.submit();
// });


let addform = document.addform;
  let text=addform.add;
  let ul=document.querySelector("todos");
  let additems=(item)=>{
  let str = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${item}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;

};

addform.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value;
  additem(item);
});
























