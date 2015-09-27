$undertow
.alias('db', 'jndi:java:jboss/datasources/ExampleDS')
.onGet("/rest/members",
    {headers: {"content-type": "application/json"}},
    ['db', function ($exchange, db) {
        return db.select("select * from member");
    }]);

var db = $undertow.resolve("db");
try {
    db.query("create table member (id serial primary key not null, name varchar(100), email varchar(100) unique, phone_number varchar(100))");
    db.query("insert into member (id, name, email, phone_number) values (0, 'John Smith', 'john.smith@mailinator.jsp.com', '2125551212')");
    db.query("insert into member (id, name, email, phone_number) values (1, 'Stuart Douglas', 'stuart@notmyrealaddress.com', '0487694837')");
} catch(e) {
    print("DB create failed")
}
