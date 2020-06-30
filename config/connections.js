import mongoose from 'mongoose';

// Mongo
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://dayplay_admin:Aq%23eua6GFBEf8jn@cluster0-x5f7u.mongodb.net/live?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const teamMemberSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    position: { type: String },
    phone: { type: String },
    email: { type: String },
    days: [{ 
        day: { type: String },
        available: { type: Boolean }
    }]
});

const scheduleSchema = new mongoose.Schema({
    week: { type: String },
    days: [{ 
        day: { type: String },
        available: { type: Boolean }
    }]
});

const TeamMembers = mongoose.model('teamMembers', teamMemberSchema);
const Schedules = mongoose.model('schedules', scheduleSchema);

export { TeamMembers, Schedules };