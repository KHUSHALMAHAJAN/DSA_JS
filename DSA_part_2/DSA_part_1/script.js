// console.log("hello")
// let a = 78
// console.log(a)
// console.log(typeof a)
// console.log("7" - 1)
// console.log(Math.ceil(2.6))
// console.log(Math.floor(Math.random()*10000) )

s = "anagram"
t = "nagaram"
condition = false
for(var i = 0;i<t.length;i++){
    for(var j = 0;j<s.length;i++){
        if(s[i] == t[j]){
            condition = true
        }
    }
    if(condition == true){
        console.log("anagram ")
    }else{
        console.log("not anagram ")
    }
}