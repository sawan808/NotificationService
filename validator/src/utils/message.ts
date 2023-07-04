export class Message {
    type: string;
    priority: number;
    body: string;

    constructor(type: string, priority: number, body: string){
        this.type = type;
        this.priority = priority;
        this.body = body;
    }
}

