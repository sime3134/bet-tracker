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
        sum INTEGER NOT NULL, date TEXT NOT NULL, odds REAL NOT NULL, status TEXT NOT NULL, 
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
                db.run(`INSERT INTO bets (user_id, sum, date, odds, status, result, title) VALUES 
                    (1, 100, "2021-10-10", 1.5, "win", 50, "1st bet"),
                    (1, 100, "2022-01-10", 1.6, "win", 60, "2nd bet"),
                    (1, 100, "2022-10-02", 1.5, "loss", -100, "3rd bet"),
                    (1, 100, "2023-05-10", 1.5, "cashout", 20, "4th bet"),
                    (1, 10, "2023-06-21", 1.5, "loss", -10, "5th bet"),
                    (1, 100, "2023-06-28", 2.0, "loss", -100, "6th bet"),
                    (1, 150, "2023-07-02", 2.0, "win", 150, "7th bet"),
                    (1, 75, "2023-07-02", 2.0, "loss", -75, "8th bet"),
                    (1, 100, "2023-07-15", 3.0, "win", 300, "9th bet"),
                    (1, 100, "2023-07-28", 2.0, "loss", -100, "10th bet"),
                    (1, 200, "2023-08-04", 1.5, "win", 100, "11th bet"),
                    (1, 400, "2023-08-12", 2.0, "win", 400, "12th bet"),
                    (1, 200, "2023-08-12", 2.4, "loss", -200, "13th bet"),
                    (1, 150, "2023-08-15", 2.0, "loss", -150, "14th bet"),
                    (1, 100, "2023-08-22", 2.0, "loss", -100, "15th bet"),
                    (1, 400, "2023-08-22", 1.5, "win", 200, "16th bet"),
                    (1, 500, "2023-08-22", 2.0, "win", 500, "17th bet"),
                    (1, 600, "2023-09-22", 1.5, "win", 300, "18th bet"),
                    (1, 300, "2023-09-26", 2.0, "loss", -300, "19th bet"),
                    (1, 100, "2023-09-27", 2.0, "loss", -100, "20th bet"),
                    (1, 100, "2023-09-28", 2.0, "open", 0, "21st bet")`
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