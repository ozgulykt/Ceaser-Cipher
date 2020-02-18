function rot13(str) { // LBH QVQ VG!
  let first = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  let second = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let result = [];

  for(let i=0; i<str.length; i++){
    if(first.indexOf(str[i]) > -1){
      result.push(second[first.indexOf(str[i])]);
    }
    else if(second.indexOf(str[i]) > -1){
      result.push(first[second.indexOf(str[i])]);
    }
    else{result.push(str[i]);}
  }
    return result.join('');
}

document.write(rot13("SERR PBQR PNZC"));