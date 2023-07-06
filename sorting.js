//Insertion sort is a simple sorting algorithm that works the way we sort playing
//  cards in our hands. Each time we take a new card we put it in the right place in our hand. 

function Sort (alb) {
    for (let i = 1; i < alb.length; i++) {
      let j = i - 1
      let key= alb[i]
      // where key is the medium value given
      while (j >= 0 && alb[j] > key) {
        alb[j + 1] = alb[j]
        j--
      }
      alb[j+1] = key
    }
    return alb
  }
  
  
  
  console.log(Sort([2, 9, 4, 7, 56] ));