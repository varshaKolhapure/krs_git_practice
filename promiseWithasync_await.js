function getData(){
     return new Promise((resolve, reject) => {
         // Simulate an API call
         setTimeout(() => {
             resolve("Data retrieved successfully!");
         }, 1000);
     });
}

async function fetchData(){
     const data = await getData();
     console.log(data);
}
fetchData();