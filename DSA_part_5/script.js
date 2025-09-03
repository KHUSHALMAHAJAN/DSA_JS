var arr = [1, 1, 0, 1, 0, 0,]
// var max = Math.max(arr[0],arr[1])
// var smax = Math.min(arr[0],arr[1])
// console.log(max);
// console.log(smax);

// for(var i = 2;i<arr.length;i++){
//     if(max <arr[i]){
//         if(smax < arr[i]){
//             smax = max
//             max = arr[i]
//         }
//         max = arr[i]
//     }
// }
// console.log(max);
// console.log(smax);

// j = arr.length - 1
// var temp = []
// for(var i = 0;i<arr.length;i++){
//     temp[j] = arr[i]
//     j--
// }
// console.log(temp);


// var temp = 0
// j = arr.length-1
// i = 0
// while(i != j){
//     temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// // arr[0] = 0
// console.log(arr);


// j = 0
// for(var i = 0;i<arr.length;i++){
//     if(arr[i] === 0){
//         arr[i] = 1
//         arr[j] = 0
//         j++
//     }
// }

// console.log(arr);

// var strs = ["khushal","kunal","mahajan"]
// console.log(strs[2][2]);

// strs = ["flower", "flow", "flight"]
// var condition = true
// var count = 0
// for (var i = 0; i < strs[0].length; i++) {
//     k = strs[0][i]
//     console.log(k);

//     for (var j = 1; j < strs.length; j++) {
//         if (k == strs[j][i]) {
//             console.log("j ",j);
//             console.log("i ",i)
//             console.log("strs[j][i] ",strs[j][i])
//             // count++;
//             // console.log("count ",count)


//         } else {
//             condition = false
//             break;
//         }
//     }
//     if (condition != false) {
//         count++
//         console.log("count ",count)
//     }
//     else{
//         break;
//     }
// }
// var str = ""
// console.log("countfinal ",count);

// for (var i = 0; i < count; i++) {
//     str += strs[0][i]
// }
// if (str != "") {
//     console.log(str);

// } else {
//     console.log(" ")
// }


// var condition = true
// var count = 0
// for (var i = 0; i < strs[0].length; i++) {
//     k = strs[0][i]
//     for (var j = 1; j < strs.length; j++) {
//         if (k == strs[j][i]) {

//         } else {
//             condition = false
//             break;
//         }
//     }
//     if (condition != false) {
//         count++
//     }
//     else{
//         break;
//     }
// }
// var str = ""
// for (var i = 0; i < count; i++) {
//     str += strs[0][i]
// }
// if (str != "") {
//     return str

// } else {
//     return " "
// }

// s = "["
// strstack = ""
// var j = -1
// var temp = ""
// count = true
// for (var i = 0; i < s.length; i++) {
//     console.log("s[i] ",s[i]);

//     if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
//         j++
//         strstack += s[i]
//         console.log("strstack ",strstack);
//         console.log("j ",j);
//         console.log("if exist");

//     }
//     else {
//         console.log("i ",i);
//         console.log('j ',j);
//         console.log("s[i] ",s[i]);
//         temp = strstack[strstack.length-1]
//         console.log("strstack[j] ",temp);
//         if (
//             (s[i] === ")" && temp === "(") ||
//             (s[i] === "]" && temp === "[") ||
//             (s[i] === "}" && temp === "{")
//         ){
//             j--
//             strstack = strstack.slice(0,-1)
//             console.log("j--",j);
//         }
//         else {
//             console.log(false);
//             count = false
//         }
//         console.log("else exist");

//     }
// }
// if(strstack == ""){

//     if(count == true)
//     console.log(true)
// }

// var arr = [7,8,6,5,4,3,2,4]
// console.log(arr.splice(1,1));
// console.log(arr[1]);

// nums = [2, 3, 3, 4, 4]

// if (nums.length === 0) 
//     console.log("0");


// let i = 0;

// for (let j = 1; j < nums.length; j++) {
//     console.log("i ",i);
//     console.log("j ",j)
//     console.log("nums[i] ",nums[i])
//     console.log("nums[j] ",nums[j])
//     if (nums[j] !== nums[i]) {
//         i++;
//         nums[i] = nums[j];
//         console.log("nums ",nums)
//     }
//     console.log("complete");
// }

// console.log(i + 1);

// nums = [1, 1, 2]
// j = 1
// k = 0
// for (var i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[j]) {
//         k++
//     }
//     j++
// }

// console.log(k);

// nums = [3, 2, 2, 3]
// var k = -1
// for (var i = 0; i < nums.length; i++) {
//     console.log("nums[i]",nums[i]);
//     console.log("nums[i+1]",nums[i+1])
//     if (nums[i] == 3) {
//         temp = nums[i]
//         nums[i] = nums[i+1]
//         nums[i+1] = temp
//         console.log(nums);

//     }
//     k++
// }
// console.log(k);
// console.log(nums);

// nums = [0,1,2,2,3,0,4,2]
// let k = 0; // Pointer for the next position of a valid element

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 3) {
//         nums[k] = nums[i];
//         k++;
//     }
// }

// console.log(k);
// console.log(nums)

// haystack = "hello"
// needle = 'll'
// for (var i = 0; i < needle.length; i++) {
//     if (haystack[i] != needle[i]) {
//         console.log("-1");
//     }
// }
// console.log("0");


// needle = "issip"
// haystack = "mississippi"

// count = false
// copy = 0
// for (var i = 0; i < haystack.length; i++) {
//     if (haystack[i] == needle[0]) {
//         console.log("if 1")
//         var  k = i
//         var copy = i
//         for (var j = 0; j < needle.length; j++) {
//             console.log("k ",k)
//             console.log("need[j] ",needle[j])
//             console.log("haystack[k] ",haystack[k])
//             if (needle[j] != haystack[k]) {
//                 console.log("if 2")
//                 console.log("-1")
//                 k = k + 1
//             }
//             else {
//                 count = true
//                 console.log("else 1")
//                 k = k +1
//             }
//         }
//     }
//     if(count == true){
//         break
//     }
// }
// if (count == true) {
//     console.log(copy)
// }
// else {
//     console.log("-1")
// }

// s = "   Hello World   "
// count = 0
// i = s.length - 1
// while (i >= 0 && s[i] == " ") {
//     i -= 1
// }
// while (i >= 0 && s[i] != " ") {
//     console.log("s[i] ",s[i])
//     console.log("second while")
//     i--
//     count++
// }
// console.log(count);

// console.log(s.trim());
// console.log(s.split(" ").join(""))

// str = "level"
// i = 0
// j = str.length-1
// console.log(j)

// k = Math.floor(str.length/2)
// console.log(k)
// count = 0
// while(str[i] == str[j] && i < k){
//     console.log("str[i] ",str[i])
//     console.log("str[j] ",str[j])
//     i++
//     j--
//     count++
//     // if(i == k){
//     //     break
//     // }
//     // else{
//     //     console.log("false")
//     // }
// }
// if(count == k){
//     console.log("true")
// }
// else{
//     console.log("false why")
// }


// str = " "
// i = 0
// j = str.length-1
// count = 0
// while(str[i] == str[j] && i < Math.floor(str.length/2)){
//     i++
//     j--
//     count++
// }
// if(count == Math.floor(str.length/2))
//     console.log("true")
// else
//     console.log("false why")

// let str = "HeLLo world GOOD MoRinG";
// let upperCaseStr = str.toLowerCase();

// console.log(str.toLowerCase())
// console.log(upperCaseStr); 


// s = "0P"
// temp = ""
// for (var i = 0; i < s.length; i++) {
//     console.log("s[i] ",s[i])
//     if ((s[i].charCodeAt() <= 90 && s[i].charCodeAt() >= 65) || (s[i].charCodeAt() <= 122 && s[i].charCodeAt() >= 97)) {
//         console.log("s[i] if ",s[i])
//         temp += s[i]
//     }
// }
// temp = temp.toLowerCase()

// console.log(temp)
// var i = 0
// var j = temp.length - 1
// count = 0
// while (temp[i] == temp[j] && i < Math.floor(temp.length / 2)) {
//     i++
//     j--
//     count++
// }
// if (count == Math.floor(temp.length / 2))
//     console.log("true")
// else
//     console.log("false")

// a = "K"
// console.log(a.charCodeAt())   

// let charCode = 4    ; // Represents the letter 'A'
// let char = String.fromCharCode(charCode+64);
// console.log(char); // Outputs 'A'

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
