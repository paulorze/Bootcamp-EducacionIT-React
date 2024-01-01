import { Subject } from 'rxjs';

export class TurnoCajaManager {
    subject$ = new Subject();

    getSubject() {
        return this.subject$.asObservable();
    };

    next(data) {
        this.subject$.next(data);
    };
};