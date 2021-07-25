// const driveItems = [{
//     'id': "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
//     'name': 'Training',
//     'isDirectory': true,
//     'items': [{
//         'id': "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
//         'name': 'New hire onboarding',
//         'isDirectory': true,
//         'items': [
//             {
//                 'id': "9b1deb4d-94dj-4bad-9bdd-2b0d7b3dcb6d",
//                 'name': 'Day 1',
//                 'isDirectory': true,
//                 'items': []
//             }, {
//                 'id': "9b1deb4d-30dk-4bad-9bdd-2b0d7b3dcb6d",
//                 'name': 'Day 2',
//                 'isDirectory': true,
//                 'items': []
//             }, {
//                 'id': "9b1deb4d-ofk4-4bad-9bdd-2b0d7b3dcb6d",
//                 'isDirectory': true,
//                 'items': []
//             }, {
//                 'id': "9b1deb4d-dp4k-4bad-9bdd-2b0d7b3dcb6d",
//                 'name': 'Registration form.pdf',
//                 'isDirectory': false,
//             }, {
//                 'id': "9b1deb4d-si3d-4bad-9bdd-2b0d7b3dcb6d",
//                 'name': 'Required document list.pdf',
//                 'isDirectory': false,
//             }, {
//                 'id': "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
//                 'name': 'Todo list.doc',
//                 'isDirectory': false,
//             }, {
//                 'id': "9b1deb4d-d405-4bad-9bdd-2b0d7b3dcb6d",
//                 'name': 'About Toddle.ppt',
//                 'isDirectory': false,
//             },
//         ]
//     }, {
//         'id': "9b1deb4d-4ro9-4bad-9bdd-2b0d7b3dcb6d",
//         'name': 'Leadership Skills',
//         'isDirectory': true,
//         'items': [{
//             'id': "9b1deb4d-4kf9-4bad-9bdd-2b0d7b3dcb6d",
//             'name': 'About.pdf',
//             'isDirectory': false,
//         }, {
//             'id': "9b1deb4d-4kd9-4bad-9bdd-2b0d7b3dcb6d",
//             'name': 'Passwords.pdf',
//             'isDirectory': false,
//         }]
//     }, {
//         'id': "9b1deb4d-3od9-4bad-9bdd-2b0d7b3dcb6d",
//         'name': 'Softskills in a workplace',
//         'isDirectory': true,
//         'items': [{
//             'id': "9b1deb4d-40e8-4bad-9bdd-2b0d7b3dcb6d",
//             'name': 'About.pdf',
//             'isDirectory': false,
//         }, {
//             'id': "9b1deb4d-30d9-4bad-9bdd-2b0d7b3dcb6d",
//             'name': 'Passwords.pdf',
//             'isDirectory': false,
//         }]
//     },
//     {
//         'id': "9b1deb4d-3k48-4bad-9bdd-2b0d7b3dcb6d",
//         'name': 'Mixpanel Introduction',
//         'isDirectory': true,
//         'items': [{
//             'id': "9b1deb4d-39d8-4bad-9bdd-2b0d7b3dcb6d",
//             'name': 'About.pdf',
//             'isDirectory': false,
//         }, {
//             'id': "9b1deb4d-499d-4bad-9bdd-2b0d7b3dcb6d",
//             'name': 'Passwords.pdf',
//             'isDirectory': false,
//         }]
//     },
//     {
//         'id': "9b1deb4d-40d8-4bad-9bdd-2b0d7b3dcb6d",
//         'name': 'Training Schedule.doc',
//         'isDirectory': false
//     }
//     ],
// }];

const driveItems = [
    {
        id: 0,
        name: "My Documents",
        children: [1],
        isFolder: true,
        parent: null,
        root: true
    },
    {
        id: 1,
        name: "Hi",
        children: [4, 7],
        parent: 0,
        isFolder: true,
    },
    {
        id: 2,
        name: "Folder 2",
        children: [3],
        parent: 0,
        isFolder: true,
    },
    {
        id: 3,
        name: "file 1.ppt",
        children: null,
        parent: 2,
        isFolder: false,
    },
    {
        id: 4,
        name: "aa",
        children: [5, 6],
        isFolder: true,
        parent: [1]
    },
    {
        id: 5,
        name: "jdd.doc",
        children: null,
        isFolder: false,
        parent: [4]
    },
    {
        id: 6,
        name: "djf.pdf",
        children: null,
        isFolder: false,
        parent: [4]
    }, {
        id: 7,
        name: "file 1.doc",
        children: null,
        parent: 1,
        isFolder: false,
    }

];

export default driveItems;