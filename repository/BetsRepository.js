import db from '@/db/database';

class BetsRepository {
    constructor(db) {
        this.db = db;
    }

    async getAllBetsForUser(userId) {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM bets WHERE user_id = ? ORDER BY date DESC", [userId], (err, rows) => {
                if(err) {
                    reject(err);
                }
                 else {
                    resolve(rows);
                 }
            });
        });
    }

    async getRecentBetsForUser(userId, limit) {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM bets WHERE user_id = ? ORDER BY date DESC LIMIT ?", [userId, limit], (err, rows) => {
                if(err) {
                    reject(err);
                }
                 else {
                    resolve(rows);
                 }
            });
        });
    }

    async getBetsForUser(userId, page = 0, limit = 10, query = "", status = "") {
        return new Promise((resolve, reject) => {
          let sql = "SELECT * FROM bets WHERE user_id = ?";
          let params = [userId];
      
          // Add query if it's provided
          if (query) {
            sql += " AND title LIKE ?";
            params.push(`%${query}%`);
          }
      
          // Add status filter if it's provided
          if (status && status !== "all") {
            sql += " AND status = ?";
            params.push(status);
          }
      
          if(limit && page)
          {
            // Add ORDER BY and LIMIT for pagination and sorting
            sql += " ORDER BY date DESC LIMIT ? OFFSET ?";
        
            // Calculate offset
            const offset = page * limit;
        
            // Push limit and offset to params
            params.push(limit, offset);
          }
      
          this.db.all(sql, params, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });
        });
      }
}

const betsRepository = new BetsRepository(db);

export default betsRepository;