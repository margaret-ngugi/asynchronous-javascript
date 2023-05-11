//1.Write an asynchronous function that accepts a message string and a delay time in
// milliseconds. The function should log the message to the console after the specified 
//delay time.
async function greet(){
    console.log('Hello I love praying football');
    
}
setTimeout(greet,2000)
console.log('She loves dancing');


//2.You have an array of user IDs and a function getUserData(id) that returns a Promise 
//with user data when given a user ID. Write an asynchronous function that fetches and logs 
//the data for each user ID one by one, in sequence.
const userId=[2,4,5,6,7,8]
function getUserData(userId){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            const userData={
                id:id,
                name:'name of user${id}',
                email:'user${id}.gmail',



            };
            resolve(userData)
            
          }, 2000);
        });
      }
      async function showUserData(arrOfId) {
        for (let i = 0; i < arrOfId.length; i++) {
          const data = await getUserData(arrOfId[i]);
          console.log(data);
        }
      }
      

            



//3.You have an asynchronous function performTask() that returns a Promise. The Promise 
//resolves if the task is successful and rejects if there's an error. Write a function that 
//calls performTask() and logs a custom success message if the task is successful, and a 
//custom error message if there's an error.


function performTask (){
    console.log('Enter your details');
};
performTask();
let task={};
let userTask =new Promise((resolve,reject)=>{
    if(task){
        setTimeout(()=>(resolve('User task completed successfully')),3000);
        
    }
    else{
        setTimeout(()=>(reject('Unable to complete userTask')),3000);
       
    }
});

async function completeUserTask(){
    let response = await userTask;
    console.log({response});
    

}
completeUserTask();
