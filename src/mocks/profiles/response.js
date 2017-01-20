function inject(request, state, logger) {
    var data = {
        "id": 1,
        "name": "Hany Elemary",
        "role": "Developer",
        "grade": "Lead Consultant",
        "yearsExperience": {
            "general": 11.2,
            "thoughtworks": 1.2
        },
        "skills": {
            "languages": [
                "Java", 
                "JavaScript", 
                "C#", 
                "C/C++", 
                "PHP", 
                "HTML", 
                "CSS"
            ],
            "frameworks": [
                "SpringBoot",
                "Axon", 
                "NodeJS", 
                "SASS/SCSS",
                "ReactJS",
                "Redux",
                "AngularJS"
            ]
        }
    };    
    
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    };    
}