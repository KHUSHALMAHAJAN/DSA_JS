
seccondition = false
// for(var i = 0;i<t.length;i++){
//     for(var j = 0;j<s.length;j++){
//         if(t[i] == s[j]){
//             console.log("s[i] ",s[i])
//             console.log("t[j] ",t[j])
//             console.log("j ",j)
//             condition = true
//         }
//     }
//     if(condition == true){
//         console.log("anagram ")
//     }else{
//         console.log("not anagram ")
//         break
//     }
// }
// s = "a"
// t = "ab"
// for(var i = 0;i<t.length;i++){
//     condition = false
//     for(var j = 0;j<s.length;j++){
//         console.log("i ",i)
//         console.log("t[i] ",t[i])
//         console.log("j ",j)
//         console.log("s[j] ",s[j])
//         if(t[i] == s[j]){
//             condition = true
//         }
//     }
//     if(condition != true)
//         console.log(" not anagram")
// }
// console.log("anagram")

// s = "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor"
// t = "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
// sArr = s.split("")
// for (var i = 0; i < t.length; i++) {
//     condition = false
//     for (var j = 0; j < sArr.length; j++) {
//         if (t[i] == sArr[j]) {
//             console.log("if")
//             console.log("t[i] ",t[i])
//             console.log("sArr[j] ",sArr[j])
//             console.log("j ",j)
//             condition = true
//             sArr[j] = null
//             break
//             // console.log("s[j] ", s[j])
//         }
//     }
//     // console.log(condition)
//     if (condition == false) {
//         console.log(t[i])
//     }
// }


// s = "aaaaaa"
// t = "bbaaaa"

// if (t.length < s.length) console.log(false)
// var j = 0
// for (var i = 0; i < s.length; i++) {
//     condition = false
//     while(j < t.length) {
//         console.log("i ",i)
//         console.log("j ",j)
//         if (s[i] == t[j]) {
//             console.log("s[i] ", s[i])
//             console.log("t[j] ", t[j])
//             console.log("if")
//             condition = true
//             j++
//             break
//         }
//         j++
//     }
//     if (condition == false){
//         console.log(false)
//     }
//     console.log("for j ",j)
// }
// console.log("end")


// n = 3
// str = ""
// arrstr = []
// for (var i = 1; i <= n; i++) {
//     console.log(i)
//     str = ""
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("if")
//         str = "FizzBuZZ"
//         console.log(str)
//     }
//     else if (i % 3 == 0) {
//         console.log("second")
//         str = "Fizz"
//         console.log(str)
//     }
//     else if (i % 5 == 0) {
//         console.log("third")
//         str = "Buzz"
//     }
//     else {
//         console.log("else")
//         str = i.toString()
//         console.log(str)
//     }
//     arrstr.push(str)
// }
// console.log(arrstr)


// var str = "123"
// console.log(str)
// console.log(parseInt(str) + 1)

// num1 = "9333852702227987"
// num2 = "85731737104263"
// ans = BigInt(num1) + BigInt(num2)
// console.log(ans.toString())


// var s = "pwwkew"
// var condition = false
// var sb = ""
// sb += s[0]
// console.log(sb)
// for (var i = 1; i < s.length; i++) {
//     console.log(i)
//     condition = false
//     for (j = 0; j < sb.length; j++) {
//         console.log("for")
//         if (s[i] == sb[j]) {
//             condition = true
//             break
//         }
//     }
//     if (condition == false)
//         sb += s[i]
//     console.log(sb)
// }
// console.log(sb.length)

// function abcd(a){
//     a()
// }
// abcd(function(){
//     console.log("a run")
// })

// function abcd(){
//     return function(){
//         console.log("a run")
//     }
// }
// var ab = abcd()
// console.log(ab())



