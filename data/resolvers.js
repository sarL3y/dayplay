import mongoose from 'mongoose';
import { TeamMembers, Schedules } from '../config/connections';

const ObjectId = mongoose.Types.ObjectId;

// resolver map
const resolvers = { 
    Query: {
        getOneTeamMember: (root, { id }) => {
            return new Promise((resolve, reject) => {
                TeamMembers
                    .findById({ "_id": new ObjectId(id) }, 
                        (err, teamMember) => {
                            if (err) reject(err)
                            else resolve(teamMember)
                        });
            });
        },
        getAllTeamMembers: () => {
            return new Promise((resolve, reject) => {
                TeamMembers
                    .find()
                    .then(res => {
                        if (res) resolve(res);
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            });
        },
        getOneSchedule: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Schedules
                    .findById({ "_id": new ObjectId(id) }, 
                        (err, schedule) => {
                            if (err) reject(err)
                            else resolve(schedule)
                        });
            });
        },
        getAllSchedules: () => {
            return new Promise((resolve, reject) => {
                Schedules
                    .find()
                    .then(res => {
                        if (res) resolve(res);
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            });
        },
    },
    Mutation: {
        createTeamMember: (root, { input }) => {
            const newTeamMember = new TeamMembers({
                firstName: input.firstName,
                lastName: input.lastName,
                position: input.position,
                phone: input.phone,
                email: input.email,
                days: input.days,
            });

            newTeamMember.id = newTeamMember._id;

            return new Promise((resolve, reject) => {
                newTeamMember
                    .save(err => {
                        if (err) reject(err)
                        else resolve(newTeamMember)
                    });
            });
        },
        updateTeamMember: (root, { input, day }) => {
            return new Promise ((resolve, reject) => {
                TeamMembers
                    .findOne({ 
                        _id: input.id 
                    }, 
                    (err, teamMember) => {
                        if (err) { 
                            isError = err;
                            console.log('Error: ', err)
                        } else {   
                            for (let i = 0; i < teamMember.days.length; i++) {
                                if (teamMember.days[i].day === day.day) {
                                    teamMember.days[i].available = !teamMember.days[i].available;

                                    teamMember.save(err => {
                                        if(err) reject(err)
                                        console.log('Before resolve', teamMember);
                                        resolve(teamMember);
                                    });
                                }
                            };            
                            resolve(teamMember);
                        };
                    });
            });
        },
        updateTeamMembers: (root, { input }) => {
            return new Promise ((resolve, reject) => {
                let isError;
                const updates = [];

                for (let i = 0; i < input.length; i++) {
                    TeamMembers
                        .findOne({ 
                            _id: input[i].id 
                        }, 
                        (err, teamMember) => {
                            if (err) { 
                                isError = err;
                                console.log('Error: ', err)
                            } else {                
                                for (let i = 0; i < teamMember.days.length; i++) {
                                    if (teamMember.days[i].day === 'SUN') {
                                        teamMember.days[i].available = !teamMember.days[i].available;

                                        teamMember.save(err => {
                                            if(err) return reject(err)
                                            console.log('Before resolve', teamMember);
                                        });

                                        updates.push(teamMember);
                                        console.log('Inside console: ', teamMember);
                                    }
                                };            

                                console.log('Final: ', teamMember);
                            };
                        });
                };

                if (isError !== undefined) {
                    reject(isError);
                } else {
                    console.log('Updates: ', updates);
                    resolve('Success');
                }
            });
        },
        deleteTeamMember: (root, { id }) => {
            return new Promise((resolve, reject) => {
                TeamMembers
                    .remove({ _id: id }, (err) => {
                        if (err) reject(err)
                        else resolve('Successfully deleted');
                    })
            })
        },
        createSchedule: (root, { input }) => {
            const newSchedule = new Schedules({
                week: input.week,
                days: input.days
            });

            newSchedule.id = newSchedule._id;

            return new Promise((resolve, reject) => {
                newSchedule
                    .save(err => {
                        if (err) reject(err)
                        else resolve(newSchedule)
                    });
            });
        },
        updateSchedule: (root, { input, day }) => {
            return new Promise ((resolve, reject) => {
                Schedules
                    .findOne({ 
                        _id: input.id 
                    }, 
                    (err, schedule) => {
                        if (err) { 
                            isError = err;
                            console.log('Error: ', err)
                        } else {   
                            for (let i = 0; i < schedule.days.length; i++) {
                                if (schedule.days[i].day === day.day) {
                                    schedule.days[i].available = !schedule.days[i].available;

                                    schedule.save(err => {
                                        if(err) reject(err)
                                        console.log('Before resolve', schedule);
                                        resolve(schedule);
                                    });
                                }
                            };            
                            resolve(schedule);
                        };
                    });
            });
        },
    }
};

export default resolvers;