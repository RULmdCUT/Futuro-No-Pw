/*
  * By iPutzx
  * No Wangsaf : wa.me/6289630567696
  * Note : Jangan Di Hapus Bwang
*/

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI('AIzaSyAxyeDIZautcsjCWYEfsranT9z-i14wDLU');

const gemini = async (text) => {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(text);
    const response = await result.response;
    const hasil = response.text();
  return hasil
};

module.exports = gemini;
