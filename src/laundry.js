/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
//  */
function getMaxPairs(noOfWahes, cleanPile, dirtyPile) {
  let cleanPack = {};
  let dirtyPack = {};
  // assign values to the objecs
  for (const cleanSock of cleanPile) {
      cleanPack[cleanSock] = cleanPack[cleanSock] + 1 || 1;
  }
  for (const dirtySock of dirtyPile) {
      dirtyPack[dirtySock] = dirtyPack[dirtySock] + 1 || 1;
  }
  // Then Loop through to see if there's clean sock that need to be paired
  // and check if it's available in the dirty storage
  for (const sock of Object.keys(dirtyPack)) {
      if (noOfWahes) {
          if (cleanPack[sock] % 2 === 1 && dirtyPack[sock]) {
              dirtyPack[sock] -= 1;
              cleanPack[sock] += 1;
              noOfWahes--;
          }
      }
  }
  // Now Do another loop to check if there's:
  for (const sock of Object.keys(dirtyPack)) {
      // Exact pair of dirty socks
      if (dirtyPack[sock] % 2 === 0) {
          if (noOfWahes > dirtyPack[sock]) {
              let washes = dirtyPack[sock];
              cleanPack[sock] = cleanPack[sock] + washes || washes;
              dirtyPack[sock] -= washes;
              noOfWahes -= washes;
          } else {
              let washes = (Math.floor(noOfWahes / 2)) * 2;
              cleanPack[sock] = cleanPack[sock] + washes || washes;
              dirtyPack[sock] -= washes;
              noOfWahes -= washes;
          }
          // Do a pair or more
      } else if (dirtyPack[sock] / 2 >= 1) {
          if (noOfWahes > dirtyPack[sock]) {
              let washes = Math.floor(dirtyPack[sock] / 2) * 2;
              cleanPack[sock] = cleanPack[sock] + washes || washes;
              dirtyPack[sock] -= washes;
              noOfWahes -= washes;
          } else {
              let washes = (Math.floor(noOfWahes / 2)) * 2;
              cleanPack[sock] = cleanPack[sock] + washes || washes;
              dirtyPack[sock] -= washes;
              noOfWahes -= washes;
          }
      }
  }
  let pairs = Object.values(cleanPack);
  // Now get the total number of pair by adding up each pairs
  totalPair = pairs.reduce((pairs, sock) => { return pairs + (Math.floor(sock / 2)) }, 0);
  return totalPair
}

module.exports = getMaxPairs
