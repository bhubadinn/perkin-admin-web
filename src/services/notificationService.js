import axios from "axios";

// Mock service for development
// const mockSendLineMessage = async (userLineId, message) => {
//   try {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log("Mock: Sending Line message:", {userLineId, message});
//     return {success: true, message: "Message sent successfully"};
//   } catch (error) {
//     console.error("Mock Error:", error);
//     throw new Error("Failed to send Line message");
//   }
// };

// Real API call to backend
const realSendLineMessage = async (userLineId, message) => {
  try {
    const response = await axios.post(
      // `http://localhost:3030/api/v1/message/send`,
      `https://sta.up.railway.app/api/v1/message/send`,
      {
        line_user_id: userLineId,
        msg: message,
      }
    );
    return {success: true, data: response.data};
  } catch (error) {
    console.error("Backend Error:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.error || "Failed to send LINE message"
    );
  }
};

// Export the appropriate function based on environment
export const sendLineMessage = realSendLineMessage;
