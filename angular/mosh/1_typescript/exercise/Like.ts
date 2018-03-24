export class Like {
    constructor(private _lCount?: number, private _liked?: boolean) {
        if (_liked === undefined) {
            this._liked = false;
        }

        if (_lCount === undefined) {
            this._lCount = 0;
        }
    }

    get lCount() {
        return this._lCount;
    }

    set liked(value: boolean) {
        if (this._liked != value) {
            this._lCount += (value === true) ? 1 : -1;
            this._liked = value;
        }
    }

    get liked() {
        return this._liked;
    }
 
}