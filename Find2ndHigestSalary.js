function Salary(arr)
    {
        arr.salary.sort((a,b)=>(a-b));
        return arr[arr.length-2];
    }
    arr=[
        {'name':'Ram','salary':100000},
        {'name':'Ramesh','salary':10000},
        {'name':'Rakesh','salary':500000},
        {'name':'Rithik','salary':650000},
        {'name':'John','salary':45000},
        {'name':'Deepak','salary':230000}
        ]
        console.log(Salary(arr));
