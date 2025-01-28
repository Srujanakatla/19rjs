async function getMobilesData() {
    let url="http://localhost:3000/mobiles"

    let data=await fetch(url)

    if(data.ok){
        let res=await data.json()
        console.log(res)
    }
}
getMobilesData()


async function postMobilesData(){
    let url="http://localhost:3000/mobiles"
    let options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        }
    }
    let data=await fetch(url,options)

    if(data.ok){
        let res=await data.json()
        console.log(res)
    }
}
postMobilesData()


async function updateMobileData() {
    let url = "http://localhost:3000/mobiles/2"; 
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }
    };
    let response = await fetch(url, options);
    if (response.ok) {
        let result = await response.json();
        console.log("Updated:", result);
    }
}
updateMobileData();

async function deleteMobileData() {
    let url = "http://localhost:3000/mobiles/3"; 
    let options = {
        method: "DELETE",
    };
    let response = await fetch(url, options);
    if (response.ok) {
        console.log("Deleted successfully!");
    }
}
deleteMobileData();



//


// async function  postDataLaptops() {
//     let url="http://localhost:3000/laptops";
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         id:3,
//          name:"macbbok m3 chip"
//      })
// }
//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);   
//     }
// }
// postDataLaptops()



// async function  updateDataLaptops(id) {
//     let url=`http://localhost:3000/laptops/${id}`;
// let options={
//     "method":"PATCH",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//          "name":"hp i9 core intel 13th GEN"
//      })
// }
//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);   
//     }
// }
// updateDataLaptops(3)



// async function  deleteDataLaptops(id) {
//     let url=`http://localhost:3000/laptops/${id}`;
// let options={
//     "method":"DELETE",
// }
//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);   
//     }else{
//         console.log(data);
        
//     }
// }
// deleteDataLaptops(1)

// async function getDataMobiles() {
//     let url="http://localhost:3000/mobiles"

//     let data=await fetch(url);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);
//     }
// }
// getDataMobiles()

// async function getDataLaptops() {
//     let url="http://localhost:3000/laptops"

//     let data=await fetch(url);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);
//     }
// }
// getDataLaptops()



// async function  postDataMobiles() {
//     let url="http://localhost:3000/mobiles";
// let options={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         id:3,
//          name:"vivo"
//      })
// }
//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json()
//         console.log(res);   
//     }
// }
// postDataMobiles()