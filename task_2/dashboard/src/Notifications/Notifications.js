import React from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils';
import NotificationItem from './NotificationItem';

import './Notifications.css';

export default function Notification(props) {
  return (
    <div className="Notifications">
      <button style={{
        position: 'absolute',
        background: 'transparent',
        border: 'none',
        right: '20px',
      }}
      arial-label='close'
      onClick={() => {
        console.log('Close button has been clicked');
      }}>
        <img src={close_icon} alt="close" height="15px" width="15px"></img>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course avaliable" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{_html:getLatestNotification() }} />
      </ul>
    </div>
  )
}