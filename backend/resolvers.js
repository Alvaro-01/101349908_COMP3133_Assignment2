const User = require('./models/User');
const Employee = require('./models/Employee');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getAllEmployees: async () => {
      return await Employee.find();
    },
    getEmployeeById: async (_, { eid }) => {
      return await Employee.findById(eid);
    },
    login: async (_, { usernameOrEmail, password }) => {
      const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
      if (!user) {
        throw new Error('User not found');
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }
      return jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
    }
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      return newUser;
    },
    addEmployee: async (_, { first_name, last_name, email, gender, salary }) => {
      const newEmployee = new Employee({ first_name, last_name, email, gender, salary });
      await newEmployee.save();
      return newEmployee;
    },
    updateEmployeeById: async (_, { eid, first_name, last_name, email, gender, salary }) => {
      const updatedEmployee = await Employee.findByIdAndUpdate(eid, { first_name, last_name, email, gender, salary }, { new: true });
      return updatedEmployee;
    },
    deleteEmployeeById: async (_, { eid }) => {
      const deletedEmployee = await Employee.findByIdAndDelete(eid);
      return deletedEmployee;
    }
  }
};

module.exports = resolvers;