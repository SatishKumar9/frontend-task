const data = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    name: "My Documents",
    children: [
      "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
      "9b1deb4d-34df-3453-3985-2b0d7b3dcb6d",
    ],
    isFolder: true,
    parent: null,
    root: true,
  },
  {
    id: "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
    name: "Hi",
    children: [
      "9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d",
      "9b1deb4d-34df-4bad-3985-2b0d7b3dcb6d",
    ],
    parent: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    isFolder: true,
  },
  {
    id: "9b1deb4d-34df-3453-3985-2b0d7b3dcb6d",
    name: "Folder 2",
    children: ["9b1deb4d-34df-4huf-3985-2b0d7b3dcb6d"],
    parent: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    isFolder: true,
  },
  {
    id: "9b1deb4d-34df-4huf-3985-2b0d7b3dcb6d",
    name: "file 1.ppt",
    children: null,
    parent: "9b1deb4d-34df-3453-3985-2b0d7b3dcb6d",
    isFolder: false,
  },
  {
    id: "9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d",
    name: "aa",
    children: [
      "9b1deb4d-34df-5th4-3985-2b0d7b3dcb6d",
      "9b1deb4d-384j-5th4-3985-2b0d7b3dcb6d",
    ],
    isFolder: true,
    parent: [1],
  },
  {
    id: "9b1deb4d-34df-5th4-3985-2b0d7b3dcb6d",
    name: "jdd.doc",
    children: null,
    isFolder: false,
    parent: ["9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d"],
  },
  {
    id: "9b1deb4d-384j-5th4-3985-2b0d7b3dcb6d",
    name: "djf.pdf",
    children: null,
    isFolder: false,
    parent: ["9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d"],
  },
  {
    id: "9b1deb4d-34df-4bad-3985-2b0d7b3dcb6d",
    name: "file 1.doc",
    children: null,
    parent: "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
    isFolder: false,
  },
];

export default data;
