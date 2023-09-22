import db from '@/db/database';

class BetsRepository {
    constructor(db) {
        this.db = db;
    }

    async getAllBetsForUser(userId) {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM bets WHERE user_id = ?", [userId], (err, rows) => {
                if(err) {
                    reject(err);
                }
                 else {
                    resolve(rows);
                 }
            });
        });
    }
}

const betsRepository = new BetsRepository(db);

export default betsRepository;