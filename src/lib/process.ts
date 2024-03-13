class Process {
    burstTime: number = 0;
    arrivalTime: number = 0;
    pid: string = '';
    finishTime: number = 0;
    turnAroundTime = 0;
    waitingTime = 0;

    constructor (burstTime:number, arrivalTime:number,pid:string){
        this.burstTime = burstTime;
        this.arrivalTime = arrivalTime;
        this.pid = pid;
    }
}

export { Process }