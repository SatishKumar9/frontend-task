// Initial Setup data for Toddle drive

const data = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    name: "My Documents",
    children: [
      "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
      "9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d",
      "9b1deb4d-34df-4huf-3985-2b0d7b3dcb6d",
    ],
    isFolder: true,
    parent: null,
    root: true,
  },
  {
    id: "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
    name: "Training",
    children: [
      "9b1deb4d-34df-4bad-3985-2b0d7b3dcb6d",
      "9b1deb4d-33hd-4bad-3985-2b0d7b3dcb6d",
      "9b1deb4d-5hh4-4bad-7t6g-2b0d7b3dcb6d",
    ],
    parent: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    isFolder: true,
  },
  {
    id: "9b1deb4d-34df-4huf-3985-2b0d7b3dcb6d",
    name: "About Toddle.ppt",
    children: null,
    parent: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    isFolder: false,
  },
  {
    id: "9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d",
    name: "New hire onboarding",
    children: [
      "9b1deb4d-34df-5th4-3985-2b0d7b3dcb6d",
      "9b1deb4d-384j-5th4-3985-2b0d7b3dcb6d",
    ],
    isFolder: true,
    parent: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  },
  {
    id: "9b1deb4d-33hd-4bad-3985-2b0d7b3dcb6d",
    name: "Leadership Skills",
    children: ["9b1deb4d-34ff-4bad-3985-2b0d7b3dcb6d"],
    isFolder: true,
    parent: "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
  },
  {
    id: "9b1deb4d-34ff-4bad-3985-2b0d7b3dcb6d",
    name: "Learning Skills.pdf",
    children: [],
    isFolder: false,
    parent: "9b1deb4d-33hd-4bad-3985-2b0d7b3dcb6d",
  },
  {
    id: "9b1deb4d-5hh4-4bad-7t6g-2b0d7b3dcb6d",
    name: "Softskills in a workplace",
    children: ["9b1deb4d-34ff-34ds-3985-2b0d7b3dcb6d"],
    isFolder: true,
    parent: "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
  },
  {
    id: "9b1deb4d-34ff-34ds-3985-2b0d7b3dcb6d",
    name: "What are Softskills.ppt",
    children: [],
    isFolder: false,
    parent: "9b1deb4d-5hh4-4bad-7t6g-2b0d7b3dcb6d",
  },
  {
    id: "9b1deb4d-34df-5th4-3985-2b0d7b3dcb6d",
    name: "Registration form.pdf",
    children: null,
    isFolder: false,
    parent: ["9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d"],
  },
  {
    id: "9b1deb4d-384j-5th4-3985-2b0d7b3dcb6d",
    name: "Todo list.doc",
    children: null,
    isFolder: false,
    parent: ["9b1deb4d-5hh4-4bad-3985-2b0d7b3dcb6d"],
  },
  {
    id: "9b1deb4d-34df-4bad-3985-2b0d7b3dcb6d",
    name: "Training Schedule.doc",
    children: null,
    parent: "9b1deb4d-5hh4-4bad-9bdd-2b0d7b3dcb6d",
    isFolder: false,
  },
];

export default data;
