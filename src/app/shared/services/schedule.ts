export class Schedule {
    public room;
    public date;
    public schedule = [];
    public scheduleDetails = [];

    constructor(sourceObject) {
        this.room = sourceObject['room'];
        this.date = sourceObject['date'];
        this.schedule = sourceObject['schedule'];

        sourceObject['scheduleDetails'].forEach(element => {
            const endHours = new Date(element.endTime).getHours();
            const endMinutes = new Date(element.endTime).getMinutes();
            const endTime = endHours + ((endMinutes < 10) ? ':0' : ':') + endMinutes;


            const startHours = new Date(element.startTime).getHours();
            const startMinutes = new Date(element.startTime).getMinutes();
            const startTime = startHours + ((startMinutes < 10) ? ':0' : ':') + startMinutes;

            const tempSchedule = {
                'desc': element.desc,
                'endTime': endTime,
                'id': element.id,
                'owner': element.owner,
                'room': element.room,
                'startTime': startTime
            };
            this.scheduleDetails.push(tempSchedule);
        });

    }


}
