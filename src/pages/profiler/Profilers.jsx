import React,{Profiler} from 'react'
import ClassLifeCycle from '../classlifecycle/ClassLifeCycle';


function Profilers() {
    const logTimes = (id, phase, actualTime, baseTime, startTime, commitTime) => {
        console.log(`${id}'s ${phase} phase:`);
        console.log(`Actual time: ${actualTime}`);
        console.log(`Base time: ${baseTime}`);
        console.log(`Start time: ${startTime}`);
        console.log(`Commit time: ${commitTime}`);
      };      
    return (
        <div>
            <Profiler id="func" onRender={logTimes}>
                <ClassLifeCycle />
            </Profiler>            
        </div>
    )
}

export default Profilers
