const students=[
    {name:"Prajwal V", age:23, from:"Bnegaluru"},
];

function newStudent(req,res){
    const {name, age, from}=req.query;
    const Student={name, age, from};
    console.log(req.body);
    students.push(Student);
    res.status(200).json(Student);
}

module.exports ={students,newStudent};
