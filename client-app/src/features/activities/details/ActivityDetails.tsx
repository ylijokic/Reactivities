import { useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsChat from './ActivityDetailsChat';
import ActivityDetailsSideBar from './ActivityDetailsSideBar';


export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            loadActivity(id);
        }
    }, [id, loadActivity])

    if(loadingInitial || !activity) return <LoadingComponent />;

    return(
        <>
            <Grid>
                <GridColumn width={10}>
                    <ActivityDetailsHeader activity={activity} />
                    <ActivityDetailsInfo activity={activity} />
                    <ActivityDetailsChat />
                </GridColumn>
                <GridColumn width={6}>
                    <ActivityDetailsSideBar activity={activity} />
                </GridColumn>
            </Grid>
        </>
    )
})