(function () {
    let frequency = 0;
    let redArr = [];
    let blueArr = [];
    while (frequency < 6) {
        let number = Math.floor(Math.random()*2);
        parseInt(number);
        if(number in redArr){
            break;
        }else{
            redArr.push(number);
            frequency++;
        }
    };
    console.log(redArr);
})();