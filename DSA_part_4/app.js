n = 5
for(var i = 1;i<=n;i++){
    for(var j = 1;j<=n-i;j++){
        process.stdout.write("  ")
    }
    for(var j = 1;j<= i;j++){
        process.stdout.write("*  ")
    }
    console.log();
}