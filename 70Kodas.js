let button = document.querySelector('button');
let jokeBox= document.querySelector('.joke')
// button.addEventListener('click',()=>{

//     fetch('https://api.chucknorris.io/jokes/random').then(res=>{
//         jokeBox.textContent = "Loading jokes mate"
//         return res.json();
//     }).then(joke=>{
//         console.log(joke)
//         jokeBox.textContent= joke.value;
//     })
// })

    let list = document.querySelector('#list')
    let searchList = document.querySelector('#search')

    fetch('https://api.chucknorris.io/jokes/categories').then(res=> res.json()).then(category =>{
        category.map(SingleCategory=>{
            list.innerHTML +=`<option>${SingleCategory}</option>`
        })

        button.addEventListener('click',()=>{
            
            // fetch(`https://api.chucknorris.io/jokes/random?category=${list.value}`).then(res=>{
            //     return res.json();
            // }).then(joke=>{
            //     console.log(joke)
            //     jokeBox.textContent= joke.value;
            // })

            fetch(`https://api.chucknorris.io/jokes/search?query=${searchList.value}`).then(res=>res.json()).then(Output=>{
                let category = null;
                let joke = null;
                Output.result.map(element=>{
                    
                    if(element.categories > []){
                        console.log(element.categories);
                        if(element.categories[0]==list.value){
                            console.log(element.categories);
                            category = element.categories[0]
                            joke = element.value
                        }
                    };
                })
                if(category==list.value){
                    jokeBox.textContent = joke
                }else{
                    jokeBox.textContent = 'No joke mate.'
                }
            })
        })
    })