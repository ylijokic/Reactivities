import { observer } from 'mobx-react-lite';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityList from './ActivityList';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivitiesFilters from './ActivitiesFilters';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if(activityRegistry.size <= 1) {
            activityStore.loadActivities();
        }
    }, [loadActivities, activityRegistry.size, activityStore])
  
  
    if(activityStore.loadingInitial) return<LoadingComponent content='Loading Activities'/>

    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivitiesFilters />
            </Grid.Column>
        </Grid>
    )
})