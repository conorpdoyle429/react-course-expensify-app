// child removed
database.ref('expenses').on('child_removed', (oldChildSnapshot) => {
    console.log(oldChildSnapshot.key, oldChildSnapshot.val());
});

// child changed
database.ref('expenses').on('child_changed', (childSnapshot) => {
    console.log(childSnapshot.key, childSnapshot.val());
});

// child added
database.ref('expenses').on('child_added', (childSnapshot) => {
    console.log(childSnapshot.key, childSnapshot.val());
});

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });  
//         });
//         console.log(expenses)
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });  
//         });
//         console.log(expenses);
//     }) 

// database.ref('expenses').push({
//     description: 'test',
//     amount: 23,
//     note: 'testing',
//     createdAt: 1
// });

// database.ref('notes').push({
//     title: 'coursee topics',
//     body: 'react python'
// });

// set data
// database.ref().set({
//     name: 'Conor Doyle',
//     age: 26,
//     stress: 6,
//     location: {
//         city: 'Manchester',
//         country: 'UK'
//     },
//     job: {
//         title: 'Software Developer',
//         company: 'TCS'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((error) => {
//     console.log(error);
// });

// update data
// database.ref().update({
//     stress: 9,
//     'location/city': 'London',
//     'job/company': 'Amazon'
// });

// delete data
// database.ref('age')
//     .remove()
//     .then(() => {
//         console.log('age removed');
//     }).catch((error) => {
//         console.log(error);
//     });

// get data one time
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((error) => {
//         console.log(error);
//     });


// subscribe to changes
// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// })

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);