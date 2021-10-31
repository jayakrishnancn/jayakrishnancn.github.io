import React from "react"
import { GiRibbonMedal } from "@react-icons/all-files/gi/GiRibbonMedal"
const Achievements = () => {
  return (
    <div className="achievements">
      <div className="achievements-container">
        <div className="achievements-title">
          <h1>Achievements</h1>
        </div>
        <div className="achievements-content max-w-md text-left">
          <div className="mb-2 flex items-center">
            <GiRibbonMedal size="2em" />
            <span>Envestnet - WOW award Q3 2021</span>
          </div>
          <div className="mb-2 flex">
            <GiRibbonMedal size="2em" />
            <span>Envestnet - WOW award Q1 2021</span>
          </div>
          <div className="mb-2 flex">
            <GiRibbonMedal size="2em" />
            <span>Envestnet - WOW award Q1 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Achievements
