/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    // let profession_developer=[];
    let profession_developer=arr.map(item=>{
        if(item.profession==="developer"){
            return item;
        }
        
    }).filter(item => item !== undefined);
    console.log(profession_developer);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let profession_developer1=[];
    arr.forEach(item=>{
        if(item.profession==="developer"){
            profession_developer1.push(item);
        }
        return;
    });
     console.log(profession_developer1);
     
  };
  
  function addData() {
    let arr1={id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(arr1);
    console.log(arr);
    
    //Write your code here, just console.log
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter(item=>{
        if(item.profession==="admin"){ 
            arr.pop(item);
            return;
         }
          
         
    })
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let new_arr=[
        { id: 4, name: "nik", age: "15", profession: "forntend" },
        { id: 5, name: "dod", age: "22", profession: "backend" },
        { id: 6, name: "red", age: "11", profession: "full stack" },
      ];

      let new_arr1=arr.concat(new_arr);
      console.log(new_arr1);
  }