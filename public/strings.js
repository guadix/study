export function oneAwayExercise() {
  console.log('oneAway');
  function getShorter(s1, s2) {
    return s1.length <= s2 ? {shorter: s1, longer: s2} : {shorter: s2, longer: s1};
  }

  function isOneAway(s1, s2) {
    const {shorter, longer} = getShorter(s1, s2);
    let distance = 0;
    let i = 0;
    let j = 0;

    if (longer.length - shorter.length > 1) {
      return false;
    }

    for(; i < shorter.length && distance <= 1; i++, j++) {
      if (shorter[i] !== longer[j]) {
        distance++;
        if (shorter[i+1] !== longer[j+1]) {
          if (shorter[i] !== longer[j+1] && shorter[i+1] !== longer[j]) {
            distance++;
          } else {
            if (shorter[i] === longer[j+1]) {
              j++
            } else {
              i++
            }
          }
        }
      }
    }

    return distance <= 1;
  }


  const testInput = [{
    first: 'pal e',
    second: 'pal e'
  }, {
    first: 'pal e',
    second: 'pale'
  }, {
    first: 'oale',
    second: 'pale'
  }, {
    first: 'pale',
    second: 'pale'
  }, {
    first: 'paee',
    second: 'pale'
  }, {
    first: 'palee',
    second: 'pal'
  }, {
    first: 'pale',
    second: 'pales'
  }, {
    first: 'apale',
    second: 'pale'
  }, {
    first: 'pera',
    second: 'tomate tomate'
  }, {
    first: 'tomate tomate',
    second: 'pera'
  }, {
    first: 'ppera',
    second: 'pera'
  }, {
    first: 'ppera',
    second: 'epera'
  }, {
    first: 'pera',
    second: 'pppera'
  }]

  for (let test of testInput) {
    console.log(`${test.first} ${test.second}`, isOneAway(test.first, test.second));
  }
}

export function stringCompressionExercise() {
  console.log('stringCompression');
  function compress(s) {
    let repetitions = 0;
    let compressed = [];
    const sArray = s.split('')
    for (let i = 1; i < sArray.length; i++) {
      repetitions++;
      if (sArray[i] !== sArray[i-1]) {
        compressed.push(sArray[i-1])
        compressed.push(repetitions);
        repetitions = 0;
      }
    }

    return compressed.length < s.length ? compressed.join('') : s;
  }

  const inputString = [
    'aabccccaa',
    'aabBbBccccaa',
  ];

  for (let test of inputString) {
    console.log(compress(test));
  }
}
