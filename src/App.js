import React, { useState } from 'react';
import _ from "lodash";
import './App.css';
import driveItems from './Data';
import Breadcrumb from './Components/Breadcrumb';
import DriveSection from './Components/DriveSection';

const App = () => {

  const rootLevel = _.filter(driveItems, item => item.root);
  const [crumbs, setCrumbs] = useState(rootLevel);
  const [title, setTitle] = useState(_.get(rootLevel, "[0].name", []));

  const rootChildrenIds = _.get(rootLevel, "[0].children", [])
  const [children, setChildren] = useState(_.filter(driveItems, item => _.includes(rootChildrenIds, item.id)));

  const selected = ({ crumb, type }) => {
    switch (type) {
      case "card": {
        setCrumbs(crumbs.concat([crumb]))
        break;
      } case "nav": {
        let index = _.indexOf(crumbs, crumbs.filter(item => item.id === crumb.id))
        setCrumbs(crumbs.slice(0, index))
        break;
      }
    }
    setTitle(crumb.name)
    setChildren(_.filter(driveItems, item => _.includes(crumb.children, item.id)))
  }

  const onClickBack = () => {
    if (_.size(crumbs) > 1) {
      const crumb = crumbs[_.size(crumbs) - 2];
      selected({ crumb, type: "nav" });
    } else {
      const crumb = crumbs[0]
      selected({ crumb, type: "back" })
    }
  }

  return (
    <div>
      <Breadcrumb crumbs={crumbs} selected={selected} clickBack={onClickBack} />
      <DriveSection childItems={children} title={title} cardSelected={selected} />
    </div>
  );
}

export default App;