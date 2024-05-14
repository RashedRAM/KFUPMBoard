import prisma from "@/app/libs/Prisma";

export default async function handler(req, res) {
  

  try {
    // Hardcoded admin user IDs
    const adminUserIds = [
      "bb447bdf-7bd0-4843-986b-887669ac3db2",
      "6f76b82f-e3cb-40d4-9f6b-89d8101101db",
      "649661db-d7c2-45c7-bace-c6aceb35ba8e",
      "46872906-fb62-4913-bfc8-706b5d720dd0"
    ];
    
    // Extract user ID from the request or from the authentication system you're using
    const userId = req.session.user?.id; // Corrected to lowercase 'id'

    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    if (adminUserIds.includes(userId)) {
      return res.status(200).json({ isAdmin: true });
    } else {
      return res.status(403).json({ isAdmin: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}