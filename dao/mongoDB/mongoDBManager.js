
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  user: String,
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

const mongoDBManager = {
  saveMessage: async (userData) => {
    try {
      const message = new Message(userData);
      await message.save();
      return true;
    } catch (error) {
      console.error('Error al guardar el mensaje en MongoDB:', error);
      return false;
    }
  },
  getAllMessages: async () => {
    try {
      const messages = await Message.find({});
      return messages;
    } catch (error) {
      console.error('Error al obtener los mensajes de MongoDB:', error);
      return [];
    }
  },
};

module.exports = mongoDBManager;