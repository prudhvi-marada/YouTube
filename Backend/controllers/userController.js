import User from "../models/userModel.js";

const updateAvatar = async (req, res) => {
  try {
    const userId = req.user.userId; // from auth middleware
    const { avatarUrl } = req.body;

    if (!avatarUrl) {
      return res.status(400).json({ message: 'Avatar URL is required' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: avatarUrl },
      { new: true, select: '-password' } // exclude password
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Avatar updated successfully', updatedUser });
  } catch (error) {
    console.error('Error updating avatar:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default updateAvatar;
