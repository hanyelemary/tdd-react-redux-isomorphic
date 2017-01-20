function inject(request, state, logger) {

    const data = [{
        "id": 1,
        "alias": "hanyelemary",
        "picture": "hanyelemary.jpg",
        "name": "Hany Elemary",
        "role": "Developer",
        "grade": "Lead Consultant"
    },
    {
        "id": 2,
        "name": "Joe Man",
        "alias": "joeman",
        "role": "Business Analyst",
        "grade": "Sr. Consultant"
    },
    {
        "id": 3,
        "alias": "haileybloom",
        "name": "Hailey Bloom",
        "role": "Developer",
        "grade": "Sr. Consultant"
    }, 
    {
        "id": 4,
        "alias": "hannahswanson",
        "name": "Hannah Swanson",
        "role": "Developer",
        "grade": "Lead Consultant"
    }, 
    {
        "id": 5,
        "alias": "joshbrooke",
        "name": "Josh Brooke",
        "role": "Developer",
        "grade": "Consultant"
    },
    {
        "id": 6,
        "alias": "johndoe",
        "name": "John Doe",
        "role": "QA",
        "grade": "Consultant"
    },
    {
        "id": 7,
        "alias": "markbane",
        "name": "Mark Bane",
        "role": "Project Manager",
        "grade": "Lead Consultant"
    }, 
    {
        "id": 8,
        "alias": "joannabrooks",
        "name": "Joanna Brooks",
        "role": "Experience Designer",
        "grade": "Sr. Consultant"
    }];
    
    function httpResponse(filtered) {
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": { 
                "consultants": filter(data) 
            }
        };
    }        

    function filter(results) {
        const patt = new RegExp(request.body, 'i');
        return results.filter(function(consultant) {        
            return patt.test(consultant.name);
        });
    }

    return httpResponse(data);
}