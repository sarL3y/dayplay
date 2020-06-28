const teamMembers = [
    {
        name: 'Laura Miller',
        position: 'Production Assistant',
        phone: '(310) 266-9159',
        email: 'laura.miller@email.com',
        days: [
            {
                day: 'SUN',
                available: true
            }, 
            {
                day: 'MON',
                available: false
            },
            {
                day: 'TUE',
                available: true
            },
            {
                day: 'WED',
                available: true
            },
            {
                day: 'THU',
                available: true
            },
            {
                day: 'FRI',
                available: true
            },
            {
                day: 'SAT',
                available: false
            }
        ]
    },
    {
        name: 'Marshall Walters',
        position: 'Production Assistant',
        phone: '(310) 266-9159',
        email: 'marshall.walters@email.com',
        days: [
            {
                day: 'SUN',
                available: true
            }, 
            {
                day: 'MON',
                available: false
            },
            {
                day: 'TUE',
                available: true
            },
            {
                day: 'WED',
                available: true
            },
            {
                day: 'THU',
                available: true
            },
            {
                day: 'FRI',
                available: false
            },
            {
                day: 'SAT',
                available: false
            }
        ]
    },
    {
        name: 'Matt Tapper',
        position: 'Production Assistant',
        phone: '(310) 266-9159',
        email: 'matt.tapper@email.com',
        days: [
            {
                day: 'SUN',
                available: false
            }, 
            {
                day: 'MON',
                available: false
            },
            {
                day: 'TUE',
                available: true
            },
            {
                day: 'WED',
                available: true
            },
            {
                day: 'THU',
                available: true
            },
            {
                day: 'FRI',
                available: true
            },
            {
                day: 'SAT',
                available: false
            }
        ]
    },
    {
        name: 'Annie Nguyen',
        position: 'Production Assistant',
        phone: '(310) 266-9159',
        email: 'annie.nguyen@email.com',
        days: [
            {
                day: 'SUN',
                available: true
            }, 
            {
                day: 'MON',
                available: false
            },
            {
                day: 'TUE',
                available: true
            },
            {
                day: 'WED',
                available: false
            },
            {
                day: 'THU',
                available: true
            },
            {
                day: 'FRI',
                available: true
            },
            {
                day: 'SAT',
                available: false
            }
        ]
    },
];

const workingSchedule = [
    {
        day: 'SUN',
        available: true
    }, 
    {
        day: 'MON',
        available: false
    },
    {
        day: 'TUE',
        available: true
    },
    {
        day: 'WED',
        available: false
    },
    {
        day: 'THU',
        available: true
    },
    {
        day: 'FRI',
        available: true
    },
    {
        day: 'SAT',
        available: false
    }
];

export { teamMembers, workingSchedule };