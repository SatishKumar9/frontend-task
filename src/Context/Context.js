import { createContext } from "react"
import driveItems from "../Data"

const crumbsContext = createContext([driveItems.filter(item => item.parent === null), () => {}])

const driveData = createContext([driveItems, () => {}])

export default crumbsContext;
export {driveData};