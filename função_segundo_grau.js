function resolverfunçãoSgundograu(a,b,c){
    let delta =b*b-4*a*c
    if (delta<0){
        console.log("a equação não tem soluções reais")
        }
        else if (delta===0){
            let x = -b/(2*a)
            console.log("A equação tem raizes iguais.")
        }
        else {
            let x1 = (-b + Math.sqrt(delta))/(2*a)
            let x2 = (-b - Math.sqrt(delta))/(2*a)
        
            console.log("A equação tem duas raizes reais: x1=",x1,"e x2=",x2)
        }
        }
         resolverfunçãoSgundograu(60,-346,33)