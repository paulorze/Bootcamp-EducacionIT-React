import { Subject } from 'rxjs';

export class TurnoOficialManager {
    subject$ = new Subject();

    getSubject() {
        return this.subject$.asObservable();
    };

    next(data) {
        this.subject$.next(data);
    };
};