//Asymptotic notation O(n)
app=
{  
        isPrime:function(numToCheck) 
                    {

                    if (numToCheck < 2) return false;

                    var sqrnum = Math.ceil(Math.sqrt(numToCheck));

                    for (var i = 2; i <= sqrnum; i++) {
                        if(numToCheck % i === 0&& numToCheck!=2)
                            return false;
                    }

                    return true;
                    },



          getPrime: function(upperBound)
            {
                
            if(upperBound===null ||upperBound==undefined)
            {
                return "no value";
            }
            var primeList=[];
            var count=0;
            for (var j = 1; j <= upperBound; j ++)
            {
                if (app.isPrime(j))
                {
                    primeList[count]=j;
                    count++;
                }
            }

                
                return primeList;
            
            }
}
module.exports=app;