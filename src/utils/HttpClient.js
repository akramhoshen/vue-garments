export default{
    get:async function(url,token){
        try {
            const response = await fetch(url, {
              method: 'GET',            
              headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${token}`
              },
            });  
                       
           return await response.json(); 

          } catch (error) {
            console.error('Error:', error);
          }
    },
    authLogin:async function(url,data){
      try {
          const response = await fetch(url, {
            method: 'POST',            
            headers: {
              'Content-Type': 'application/json',
              'Accept':'application/json'
            },
            body:JSON.stringify(data)
          });  
                     
         return await response.json(); 

        } catch (error) {
          console.error('Error:', error);
        }
   }, 
    postJson:async function(url,data,token){
      try {
          const response = await fetch(url, {
            method: 'POST',            
            headers: {
              'Content-Type': 'application/json',
              'Accept':'application/json',
              'Authorization':`Bearer ${token}`
            },
            body:JSON.stringify(data)
          });  
                     
         return await response.json(); 

        } catch (error) {
          console.error('Error:', error);
        }
   },     
    postForm:async function(url,data,token){
        try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${token}`
              },
              body:data
            });
          
            return await response.json();

          } catch (error) {

            console.error('Error:', error);
            
          }
    },
    delete:async function(url,token){      
        try {
            const response = await fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json',
                'Authorization':`Bearer ${token}`
              }
            });
            
            return await response.json();
           
          } catch (error) {
            console.error('Error:', error);
          }

    },
    update:async function(url,data,token){      
      try {
          const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Accept':'application/json',
              'Authorization':`Bearer ${token}`
            },
            body:JSON.stringify(data)
          });
          
          return await response.json();
         
        } catch (error) {
          console.error('Error:', error);
        }

  }

}