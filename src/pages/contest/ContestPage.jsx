import React, { Component } from 'react'
import Logout from '../../global_components/logout/Logout'
import Timer from './timer/Timer'
// import TabController from './tab_controller/TabController'
import RecentActivity from './recent_activity/RecentActivity'
import Tabs from '../../global_components/tab_controller/Tabs'
import Leaderboard from './leaderboard/Leaderboard'



export default class ContestPage extends Component {
    render() {
        return (
            <>
                {/* Top Components */}
                <div>
                    <Timer /> Timer is rendered;
                    <Logout /> Logout is rendered
                </div>

                
                {/* TabController is rendered */}
                <Tabs>
                    <div label="Problems">
                        Problems are displayed here
                        <Problems/>
                    </div>
                    <div label="Leaderboard">
                        Leaderboard is displayed here
                        <Leaderboard/>
                    </div>
                </Tabs>
                
                <div>
                    {/* Recent Activity is rendered */}
                    <RecentActivity />
                </div>
            </>
        )
    }
}
