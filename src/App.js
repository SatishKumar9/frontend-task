import React, { useState } from "react";
import _ from "lodash";
import "./App.css";

import data from "./Data"; // initial setup data for toddle drive
import Breadcrumb from "./Components/Breadcrumb"; // navigation Bar
import DriveSection from "./Components/DriveSection"; // component showing drive contents

const App = () => {
  const [driveItems, setDriveItems] = useState(data); // complete drive data

  const rootLevel = _.filter(driveItems, (item) => item.root); // root folder of drive
  const [crumbs, setCrumbs] = useState(rootLevel); // navBar navigation path sequence of drive folders

  const [parent, setParent] = useState(_.get(rootLevel, "[0]", [])); // current parent directory
  const rootChildrenIds = _.get(rootLevel, "[0].children", []);
  // drive contents(children) of current  parent directory
  const [children, setChildren] = useState(
    _.filter(driveItems, (item) => _.includes(rootChildrenIds, item.id))
  );

  const [searchText, setSearchText] = useState(""); // search input value
  const [searchResults, setSearchResults] = useState([]); // search input results among children of current folder

  // filters children based on search text
  const onSearch = (params) => {
    setSearchText(params);
    const filter = params.trim().toUpperCase();
    const searchResults = _.filter(children, (item) => {
      if (item.name.toUpperCase().indexOf(filter) > -1) {
        return true;
      }
    });
    setSearchResults(searchResults);
  };

  // changes navBar crumbs, parent and drive contents upon selecting a crumb or card (folder/file) or navBar back button
  const selected = ({ crumb, type }) => {
    switch (type) {
      case "card": {
        setCrumbs(crumbs.concat([crumb]));
        break;
      }
      case "nav": {
        let index = _.indexOf(crumbs, crumb);
        setCrumbs(crumbs.slice(0, index + 1));
        break;
      }
      default: {
        break;
      }
    }
    setSearchText("");
    setParent(crumb);
    setChildren(
      _.filter(driveItems, (item) => _.includes(crumb.children, item.id))
    );
  };

  // adding a new child to current parent
  const addChild = (id) => {
    const parentId = _.indexOf(driveItems, parent);
    driveItems[parentId].children.unshift(id);
    setDriveItems(driveItems);
    selected({ crumb: parent });
  };

  // removing child from current parent
  const removeChild = (id) => {
    const parentId = _.indexOf(driveItems, parent);
    driveItems[parentId].children = _.get(
      driveItems,
      `${parentId}.children`,
      []
    ).filter((item) => item !== id);
    setDriveItems(driveItems);
    selected({ crumb: parent });
  };

  // clicking on back button in navbar
  const onClickBack = () => {
    if (_.size(crumbs) > 1) {
      const crumb = crumbs[_.size(crumbs) - 2];
      selected({ crumb, type: "nav" });
    } else {
      const crumb = crumbs[0];
      selected({ crumb, type: "back" });
    }
  };

  return (
    <div>
      <Breadcrumb crumbs={crumbs} selected={selected} clickBack={onClickBack} />
      <DriveSection
        childItems={searchText ? searchResults : children}
        parent={parent}
        cardSelected={selected}
        searchText={searchText}
        onSearch={onSearch}
        driveItems={driveItems}
        setDriveItems={setDriveItems}
        addChild={addChild}
        removeChild={removeChild}
        setSearchText={setSearchText}
      />
    </div>
  );
};

export default App;
