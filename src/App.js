import React, { useState } from "react";
import _ from "lodash";
import "./App.css";
import data from "./Data";
import Breadcrumb from "./Components/Breadcrumb";
import DriveSection from "./Components/DriveSection";

const App = () => {
  const [driveItems, setDriveItems] = useState(data);

  const rootLevel = _.filter(driveItems, (item) => item.root);
  const [crumbs, setCrumbs] = useState(rootLevel);
  const [parent, setParent] = useState(_.get(rootLevel, "[0]", []));

  const rootChildrenIds = _.get(rootLevel, "[0].children", []);
  const [children, setChildren] = useState(
    _.filter(driveItems, (item) => _.includes(rootChildrenIds, item.id))
  );

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    setParent(crumb);
    setChildren(
      _.filter(driveItems, (item) => _.includes(crumb.children, item.id))
    );
  };

  const addChild = (id) => {
    const parentId = _.indexOf(driveItems, parent);
    driveItems[parentId].children.unshift(id);
    setDriveItems(driveItems);
    selected({ crumb: parent });
  };

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
