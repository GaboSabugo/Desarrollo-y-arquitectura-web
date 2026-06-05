let pruebaarray2 = ["uno", "dos", "tres", "cuatro", "cinco"]
for (i=0 ; i<pruebaarray2.length; i++){
    pruebaarray2[i] = pruebaarray2[i].substring(0,1).toUpperCase() + pruebaarray2[i].substring(1)
    console.log(pruebaarray2[i])
}