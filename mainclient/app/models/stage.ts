export class Stage {
    title = '';
    emails: string;
    message = '';
    deadline: number=0;

    constructor(obj: any) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}