var arr=[];

var findLongestWord= (arr)=> { for(let i=0; i<arr.length;i++){
   return arr.map(({m,p})=>({[arr[i]]:arr[i].length})).reduce((max,mx)=>Math.max(max,arr[i].p),Infinity) 
}

}
    

//return console.log("le mot le plus long est ${} et sa longueur est ${max} ")

arr=["JavaScript","React","Angular","Spring","Flutter"];
console.log(findLongestWord(arr))
  var calctabelt =(arr)=>{
    return arr.flat()
    .reduce(function (acc, curr) { if (typeof acc[curr] == 'undefined') { acc[curr] = 1; } else { acc[curr] += 1; } return acc; }, {});


  }
  arr=[['a','b','c'],['b','d','z']];
  console.log(calctabelt(arr))

 const initial=0;
   var val1=0;
   var val2=0;
    var ini= (arr)=>{arr.filter(l=>l.marks>50).reduce(
        (accumulator, currentvalue) => accumulator + currentvalue,
      initial);}
      
      var note=(arr)=>  { arr.map(n=>n.marks>50 ? val1+= arr.filter(p=>p.marks>50).reduce(
        (accumulator, currentvalue) => accumulator + currentvalue,
      initial) : val2+=arr.filter(p=>p.marks<50).map(s=>s.marks+15).reduce(
        (accu, curr) => accu + curr,
      initial)) 
        return val1+val2;
    }
 
  
 
   arr=[
        {name:'John', id:123,marks:250},
        {name:'Joe', id:103,marks:20}
    ];
    console.log(note(arr)) 