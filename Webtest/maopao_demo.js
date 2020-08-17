(function () {
  let number_arr = [
    3213.5,
    4564.4,
    3,
    45,
    3452,
    342,
    345,
    1,
    3,
    4,
    5,
    666,
    4,
    990,
    71,
  ];
  for (let index = 0; index < number_arr.length; index++) {
    for (let jindex = 0; jindex < number_arr.length - index; jindex++) {
      // console.log(jindex,'次',number_arr);
      if (number_arr[jindex] > number_arr[jindex + 1]) {
        // console.log(number_arr[jindex]);
        let auxarr = number_arr[jindex];
        number_arr[jindex] = number_arr[jindex + 1];
        number_arr[jindex + 1] = auxarr;
      }
    }
    // console.log(index);
  }
  console.log(number_arr);
})();
