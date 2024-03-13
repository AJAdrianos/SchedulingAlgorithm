<script>
    import Dropdown from '$lib/Dropdown.svelte';
    import {readable, writable} from 'svelte/store';
    import { Algorithm } from '$lib/algorithms';
    import {Process} from '$lib/process';

    let chosenAlgorithm;
    let burstTimesString = '';
    let arrivalTimesString = '';
    let processes = writable([]);
    let gantChartData = writable([]);

    const options = readable({
        'FCFS':"First Come First Served",
        'RR':"Round Robin",
        'SRT':"Shortest Remaining Time",
        'SJF':"Shortest Job First",
        'P':"Priority"
    });

    /**
     * @param {{ detail: { value: any; }; }} event
     */
    function optionChanged(event){
        chosenAlgorithm = event.detail.value;
        console.log('selected option: ', chosenAlgorithm);
    }
    function solve(){
        let burstTimes = burstTimesString.split(' ');
        let arrivalTimes = arrivalTimesString.split(' ');
        for(let i = 0; i < burstTimes.length; i++){
            let id = 'P' + (i+1).toString();
            let process = new Process(+burstTimes[i], +arrivalTimes[i], id);
            $processes[$processes.length] = process
        }

        let algorithm = new Algorithm($processes);
        algorithm.FCFS().forEach(el=>{
            $gantChartData[$gantChartData.length] = el;
        });
        console.log($gantChartData);
    }
</script>

<form>
    <label for="algorithms">Algorith</label>
    <br>
    <Dropdown {options} on:message="{optionChanged}"/>
    <br>
    <label for="burstTimes">Burst Times</label>
    <br>
    <input type="text" id="burstTimes" bind:value={burstTimesString}>
    <br>
    <label for="arrivalTimes">Arrival Times</label>
    <br>
    <input type="text" id="arrivalTimes" bind:value={arrivalTimesString}>
    <br>
    <button on:click={solve}>Solve</button>
    <div>
        <table>
            <thead>
                <tr>
                    <th>PID</th>
                    <th>Arrival Time</th>
                    <th>Burst Time</th>
                    <th>Finish Time</th>
                    <th>Turnaround Time</th>
                    <th>Waiting Time</th>
                </tr>
            </thead>
            <tbody>
                {#each $processes as process}
                    <tr>
                        <td>{process.pid}</td>
                        <td>{process.arrivalTime}</td>
                        <td>{process.burstTime}</td>
                        <td>{process.finishTime}</td>
                        <td>{process.turnAroundTime}</td>
                        <td>{process.waitingTime}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</form>


<style>
    table, th, td {
        border: 1px solid;
        border-collapse: collapse;
    }
    table thead tr{
        background-color:darkslategrey;
        color:white;
    }
    table tbody tr:hover {
        background-color: #ddd;
    }
</style>