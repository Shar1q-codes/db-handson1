> show dbs
Inventory  0.000GB
admin      0.000GB
config     0.000GB
local      0.000GB
temp       0.000GB

> use Human_Resources
switched to db Human_Resources

> db.employee.insertMany([{firstName: "John", lastName: "Doe", salary: 25000, department: "HR", lastCompany: "X", lastSalary: 10000, overallExp: 2, contactInfo: 1234567890, yearGrad: 2016, gradStream: "CSE"}, {firstName: "Rohan", lastName: "Jame", salary: 30000, department: "Technical", lastCompany: "Y", lastSalary: 15000, overallExp: 1, contactInfo: 1234567860, yearGrad: 2015, gradStream: "CSE"}, {firstName: "Jame", lastName: "Doe", salary: 35000, department: "Accounts", lastCompany: "Z", lastSalary: 20000, overallExp: 1, contactInfo: 123567890, yearGrad: 2019, gradStream: "ECE"}, {firstName: "Sao", lastName: "Avika", salary: 30000, department: "Sales", lastCompany: "Y", lastSalary: 15000, overallExp: 2, contactInfo: 1234567690, yearGrad: 2015, gradStream: "CSE"}, {firstName: "Jame", lastName: "Roh", salary: 35000, department: "Accounts", lastCompany: "Z", lastSalary: 15000, overallExp: 2, contactInfo: 1234567890, yearGrad: 2019, gradStream: "EEE"},{firstName: "Rohan", lastName: "Jame", salary: 30000, department: "Technical", lastCompany: "Y", lastSalary: 15000, overallExp: 1, contactInfo: 1234567860, yearGrad: 2015, gradStream: "CSE"}, {firstName: "Jame", lastName: "Doe", salary: 35000, department: "Accounts", lastCompany: "Z", lastSalary: 20000, overallExp: 1, contactInfo: 123567890, yearGrad: 2019, gradStream: "ECE"}, {firstName: "Sao", lastName: "Avika", salary: 30000, department: "Sales", lastCompany: "Y", lastSalary: 15000, overallExp: 2, contactInfo: 1234567690, yearGrad: 2015, gradStream: "CSE"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6308aa420257e561193d03fa"),
                ObjectId("6308aa420257e561193d03fb"),
                ObjectId("6308aa420257e561193d03fc"),
                ObjectId("6308aa420257e561193d03fd"),
                ObjectId("6308aa420257e561193d03fe"),
                ObjectId("6308aa420257e561193d03ff"),
                ObjectId("6308aa420257e561193d0400"),
                ObjectId("6308aa420257e561193d0401")
        ]
}

> db.employee.find().pretty()
{
        "_id" : ObjectId("6308aa420257e561193d03fa"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : 25000,
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : 10000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2016,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03fb"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03fc"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03fd"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : 30000,
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567690,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03fe"),
        "firstName" : "Jame",
        "lastName" : "Roh",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03ff"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308aa420257e561193d0400"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6308aa420257e561193d0401"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : 30000,
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567690,
        "yearGrad" : 2015,
        "gradStream" : "CSE"
}

> db.employee.find({salary: {$lt:30000}}).pretty()
{
        "_id" : ObjectId("6308aa420257e561193d03fa"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : 25000,
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : 10000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2016,
        "gradStream" : "CSE"
}

> db.employee.updateMany({salary:{$gt:30000}}, {$set: {salary:28000}})
{ "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
> db.employee.find({salary:28000}).pretty()
{
        "_id" : ObjectId("6308aa420257e561193d03fc"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 28000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03fe"),
        "firstName" : "Jame",
        "lastName" : "Roh",
        "salary" : 28000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("6308aa420257e561193d0400"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 28000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}

> db.employee.deleteMany({lastCompany: "Y"})
{ "acknowledged" : true, "deletedCount" : 4 }
> db.employee.find().pretty()
{
        "_id" : ObjectId("6308aa420257e561193d03fa"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : 25000,
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : 10000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2016,
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03fc"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 28000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("6308aa420257e561193d03fe"),
        "firstName" : "Jame",
        "lastName" : "Roh",
        "salary" : 28000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallExp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradStream" : "EEE"
}
{
        "_id" : ObjectId("6308aa420257e561193d0400"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 28000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallExp" : 1,
        "contactInfo" : 123567890,
        "yearGrad" : 2019,
        "gradStream" : "ECE"
}