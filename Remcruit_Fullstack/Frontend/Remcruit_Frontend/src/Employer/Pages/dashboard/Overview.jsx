import React, { useState } from 'react'
import './overviewStyles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleExclamation, faComments, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'


import ImageUpload from '../../components/imageUpload/imageUpload';

function Overview() {
  return (
    <>
      <div className="overview-container">
        <div className="overview-header">
          <div className="overview-header-head">
            <div className="overview-header-head-left">
              <p className='recruiter-name'>Hello Recruiter Name!</p>
            </div>
            <div className="overview-header-head-right">
              <div className='company-notifications'>You have 10 notifications
                <div className='notif'>
                  <FontAwesomeIcon icon={faBell} className='bell' />
                </div>
              </div>
            </div>
          </div>
          <div className="overview-header-foot">
            <div className="new-candidates">
              <div className="metric-left">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="metric-right">
                <div className="count">50</div>
                <div className="metric">New Candidates</div>
              </div>
            </div>
            <div className="awaiting-feedback">
              <div className="metric-left">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
              <div className="metric-right">
                <div className="count">50</div>
                <div className="metric">Awaiting Feedback</div>
              </div>
            </div>
            <div className="interviews-to-go">
              <div className="metric-left">
                <FontAwesomeIcon icon={faComments} />
              </div>
              <div className="metric-right">
                <div className="count">50</div>
                <div className="metric">Interviews To Go</div>
              </div>
            </div>
            <div className="people-employed">
              <div className="metric-left">
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
              <div className="metric-right">
                <div className="count">50</div>
                <div className="metric">People Employed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-body">
          <div className="overview-body-1"></div>
          <div className="overview-body-2"></div>
        </div>

      </div>
    </>
  )
}

export default Overview