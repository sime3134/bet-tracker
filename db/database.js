const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('db/bet-tracker.db', (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log('Connected to database');
    }
});

db.serialize(() => {

    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password text NOT NULL);', (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('Created users table');
        }
    });

    db.run(`CREATE TABLE IF NOT EXISTS bets (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, 
        sum INTEGER NOT NULL, date TEXT NOT NULL, odds REAL NOT NULL, outcome TEXT NOT NULL, 
        result INTEGER NOT NULL, title TEXT NOT NULL, FOREIGN KEY(user_id) REFERENCES users(id));`, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('Created bets table');
        }
    });

    db.get('SELECT COUNT(*) as count FROM bets', (err, rows) => {
        if(err) {
            console.error(err);
        } else {
            if(rows.count === 0) {
                db.run(`INSERT INTO bets (user_id, sum, date, odds, outcome, result, title) VALUES 
                    (1, 100, "2021-10-10", 1.5, "win", 50, "First bet"),
                    (1, 100, "2022-01-10", 1.6, "win", 60, "Second bet"),
                    (1, 100, "2022-10-02", 1.5, "loss", -100, "Third bet"),
                    (1, 100, "2023-05-10", 1.5, "cashout", 20, "Fourth bet"),
                    (1, 10, "2023-09-21", 1.5, "loss", -10, "Fifth bet"),
                    (1, 100, "2023-09-22", 2.0, "pending", 0, "Sixth bet")`
                    , (err) => {
                    if(err) {
                        
                        console.error(err);
                    } else {
                        console.log('Inserted default bets');
                    }
                });
            }
        }
    });

    db.get('SELECT COUNT(*) as count FROM users', (err, rows) => {
        if(err) {
            console.error(err);
        } else {
            if(rows.count === 0) {
                db.run(`INSERT INTO users (username, password) VALUES 
                    ("user1", "password1")`
                    , (err) => {
                    if(err) {
                        console.error(err);
                    } else {
                        console.log('Inserted default bets');
                    }
                });
            }
        }
    });

});

export default db;