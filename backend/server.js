import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://djrogerm1052:Roger.Mondragon2025@proyectofinal.hbphd.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({ 
  email: { type: String, unique: true },
  password: { type: String, required: true }
});

// Elimina el índice único en `username`
// UserSchema.index({ username: 1 }, { unique: false });

const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  try {
    await user.save();
    res.send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send({ message: 'Login successful' });
  } else {
    res.send({ message: 'Invalid credentials' });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
