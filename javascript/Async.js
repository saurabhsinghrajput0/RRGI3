function getData(dataId , getNextData){
    setTimeout(()=>{
        console.log("DataId :"+ dataId)
        if(getNextData){
            getNextData()
        }
    },10);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5,()=>{

                })
            })
        })
    })
})


let promise = new Promise((resolve. reject)=> {
    let success = true 
})



function getData(dataId){
    return new promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data is :"+ dataId)
            reject("Its not Fullfilled")
        }),3000)
    }
getData(1).then(()=>getData(2)).then(()=>getData(3)).catch(arr)