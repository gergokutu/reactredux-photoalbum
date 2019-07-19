// export function helloWorld(firstName, lastName) {
//   return {
//     type: 'NEW_HELLO_WORLD',
//     payload: {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
// }

export function helloWorld(firstName, lastName) {
  return {
    type: 'NEW_HELLO_WORLD',
    payload: {
      // with Object Literal Property Value Shorthand
      firstName,
      lastName
    }
  }
}

